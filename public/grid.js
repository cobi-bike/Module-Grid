// Constants
var localStorageKeyGridOrderedList = 'grid-ordered-list';
var localStorageKeyGridZoom = 'grid-zoom';

var defaultOrderedList = [
  'speed',
  'average_speed',
  'cadence',
  'user_power',
  'heart_rate',
  'ascent',
  'calories',
  'distance',
  'duration'
];

var defaultZoomIndex = 3;
var editZoomIndexOverride = 2;

var minZoomIndex = 1;
var maxZoomIndex = 4;

var remToZoomMapping = [0, 2.7, 2.7, 1.9, 1.4];

var touchInteractionEnabled = false;
var isPortrait = window.matchMedia("(orientation: portrait)").matches;

function getOrderedList() {
  value = JSON.parse(localStorage.getItem(localStorageKeyGridOrderedList));
  if (value === null) {
    return defaultOrderedList;
  } else {
    return value;
  }
}

function setOrderedList(value) {
  localStorage.setItem(localStorageKeyGridOrderedList, JSON.stringify(value));
}

function getZoomIndex() {
  value = JSON.parse(localStorage.getItem(localStorageKeyGridZoom));
  if (value === null) {
    return defaultZoomIndex;
  } else {
    return value;
  }
}

function setZoomIndex(value) {
  localStorage.setItem(localStorageKeyGridZoom, JSON.stringify(value));
}


// Load from Persistence
var zoomIndex = getZoomIndex();
var orderedList = getOrderedList();

// Zoom Control
if (COBI.parameters.state() == COBI.state.edit && isPortrait) {
  zoomIndex = editZoomIndexOverride;
} else {
  COBI.hub.externalInterfaceAction.subscribe(function(action) {
    if ((action == 'UP' || action == 'RIGHT') && zoomIndex > minZoomIndex) {
      zoomIndex--;  
      setZoomIndex(zoomIndex);
    }
    if ((action == 'DOWN' || action == 'LEFT') && zoomIndex < maxZoomIndex) {
      zoomIndex++;
      setZoomIndex(zoomIndex);
    } 
    updateGridZoom();
  });  
}

// List has changed?
if (orderedList.length != defaultOrderedList.length) {
  // Erase persistence - override with default list
  orderedList = defaultOrderedList;
  setOrderedList(orderedList);
  console.warn('COBI', 'Grid configuration reset');
}

// Persist Ordered List on Resort
$('body').on('stop', function(e, sortable) {
  var reorderedList = [];
  for (var i = 0; i < sortable.$el[0].childNodes.length; i++) {
    reorderedList.push(sortable.$el[0].childNodes[i].id);
  }
  orderedList = reorderedList;
  setOrderedList(orderedList)
});

// Show / Hide Title
COBI.app.touchInteractionEnabled.subscribe(function(value) {
  touchInteractionEnabled = value;
  var elements = document.getElementsByClassName('label');
  for (var i in elements) {
    if (elements[i].style) {
      elements[i].style.visibility = touchInteractionEnabled ? 'visible' : 'hidden';  
    }
  }
});

function restoreGrid() {
  clearGrid();
  for (var i = 0; i < orderedList.length; i++) {
    var definition = definitionForId(orderedList[i]);
    createGridItem(definition);
    updateGridItemWith(definition, definition.defaultValue);
    subscribeGridItemWith(definition);
  }
}

function subscribeGridItemWith(definition) {
  var formatter = definition.formatter;
  definition.unsubscribe();
  definition.subscribe(function(value) {
    updateGridItemWith(definition, formatter(value));
  });
}

function updateGridItemWith(definition, value) {
  $('#'+definition.id+'_value').html(`${value}`);
  $('#'+definition.id+'_unit').html(`${definition.unit}`);
  $('#'+definition.id+'_name').html(`${definition.name}`);  
}

function updateGridZoom() {
  for (var i = minZoomIndex; i <= maxZoomIndex; i++) {
    document.getElementById("main-grid").classList.remove('uk-child-width-1-'+i);  
  }
  document.getElementById("main-grid").classList.add('uk-child-width-1-'+zoomIndex);
  document.body.style['font-size'] = remToZoomMapping[zoomIndex]+'rem';
}

function createGridItem(definition) {
  var container = document.createElement('li');
  container.setAttribute('id', definition.id);
  
  var item = document.createElement('div');
  item.setAttribute('class', 'uk-card uk-card-default uk-card-body');
  item.onselectstart = function() { return false };
  
  var nameLabel = document.createElement('div');
  nameLabel.setAttribute('class', 'label');
  nameLabel.setAttribute('id', definition.id + '_name');
  nameLabel.innerHTML = definition.name;
  nameLabel.style.visibility = touchInteractionEnabled ? 'visible' : 'hidden'; 
  nameLabel.onselectstart = function() { return false };
  
  var valueLabel = document.createElement('div');
  valueLabel.setAttribute('class', 'value');
  valueLabel.setAttribute('id', definition.id + '_value');
  valueLabel.innerHTML = definition.value;
  valueLabel.onselectstart = function() { return false };
  
  var unitLabel = document.createElement('div');
  unitLabel.setAttribute('class', 'unit'); 
  unitLabel.setAttribute('id', definition.id + '_unit');
  unitLabel.innerHTML = definition.unit;
  unitLabel.onselectstart = function() { return false };
  
  container.appendChild(item);

  item.appendChild(nameLabel);
  item.appendChild(valueLabel);
  item.appendChild(unitLabel);

  document.getElementById('main-grid').appendChild(container);  
}

function clearGrid() {
  var contentContainer = document.getElementById('main-grid');
  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
  }
}

function definitionForId(id) {
  for (var i = 0; i < definitions.length; i++) {
    if (definitions[i].id == id) return definitions[i];
  }
  return null;
}

var definitions = [
{
  id: "speed",
  name: "Speed",
  subscribe: COBI.rideService.speed.subscribe,
  unsubscribe: COBI.rideService.speed.unsubscribe,
  formatter: formatSpeedDot1,
  unit: 'km/h',
  defaultValue: '-'
},
{
  id: "average_speed",
  name: "Avg Speed",
  subscribe: COBI.tourService.averageSpeed.subscribe,
  unsubscribe: COBI.tourService.averageSpeed.unsubscribe,
  formatter: formatSpeedDot1,
  unit: 'Ø km/h',
  defaultValue: '-'
},
{
  id: "user_power",
  name: "User Power",
  subscribe: COBI.rideService.userPower.subscribe,
  unsubscribe: COBI.rideService.userPower.unsubscribe,
  formatter: formatInt,
  unit: 'watts',
  defaultValue: '-'
},
{
  id: "cadence",
  name: "Cadence",
  subscribe: COBI.rideService.cadence.subscribe,
  unsubscribe: COBI.rideService.cadence.unsubscribe,
  formatter: formatInt,
  unit: 'rpm',
  defaultValue: '-'
},
{
  id: "distance",
  name: "Distance",
  subscribe: COBI.tourService.ridingDistance.subscribe,
  unsubscribe: COBI.tourService.ridingDistance.unsubscribe,
  formatter: formatDistanceDot1,
  unit: 'km total',
  defaultValue: '-'
},
{
  id: "calories",
  name: "Calories",
  subscribe: COBI.tourService.calories.subscribe,
  unsubscribe: COBI.tourService.calories.unsubscribe,
  formatter: formatInt,
  unit: 'kcal',
  defaultValue: '-'
},
{
  id: "ascent",
  name: "Ascent",
  subscribe: COBI.tourService.ascent.subscribe,
  unsubscribe: COBI.tourService.ascent.unsubscribe,
  formatter: formatInt,
  unit: 'm',
  defaultValue: '-'
},
{
  id: "heart_rate",
  name: "Heart Rate",
  subscribe: COBI.rideService.heartRate.subscribe,
  unsubscribe: COBI.rideService.heartRate.unsubscribe,
  formatter: formatInt,
  unit: 'bpm',
  defaultValue: '-'
},
{
  id: "duration",
  name: "Duration",
  subscribe: COBI.tourService.ridingDuration.subscribe,
  unsubscribe: COBI.tourService.ridingDuration.unsubscribe,
  formatter: formatMins,
  unit: 'min',
  defaultValue: '-'
}];

// Init Grid on Load
$(window).on('blur focus', function() { 
  restoreGrid();
  updateGridZoom(); 
});

$(window).on("load", function (e) {
  restoreGrid();
  updateGridZoom(); 
});
