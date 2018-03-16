COBI.init('token');

// Make clock appear in upper right corner
COBI.app.clockVisible.write(false);
// Also listen to standard controller events
COBI.devkit.overrideThumbControllerMapping.write(true);

// Disable Reordering in Experience
var inEditMode = (COBI.parameters.state() == COBI.state.edit);

// Allow user to zoom in and out
COBI.hub.externalInterfaceAction.subscribe(function(action) {
  // Listen to inputs and update zoom index variable
  if ((action == 'UP' || action == 'RIGHT')) {
    zoomIn();
  }
  if ((action == 'DOWN' || action == 'LEFT')) {
    zoomOut();
  }
});

// Display detailled item names if touch interaction is allowed
COBI.app.touchInteractionEnabled.subscribe(function(touchInteractionEnabled) {
  updateInterfaceVisibility(touchInteractionEnabled);
});

// Define id, name, events, formatting functions, units and default value for each item
var definitions = [
  {
    id: 'speed',
    name: 'Speed',
    subscribe: COBI.rideService.speed.subscribe,
    unsubscribe: COBI.rideService.speed.unsubscribe,
    formatter: formatSpeedDot1,
    unit: 'km/h',
    defaultValue: '-'
  },
  {
    id: 'average_speed',
    name: 'Avg Speed',
    subscribe: COBI.tourService.averageSpeed.subscribe,
    unsubscribe: COBI.tourService.averageSpeed.unsubscribe,
    formatter: formatSpeedDot1,
    unit: 'Ø km/h',
    defaultValue: '-'
  },
  {
    id: 'user_power',
    name: 'User Power',
    subscribe: COBI.rideService.userPower.subscribe,
    unsubscribe: COBI.rideService.userPower.unsubscribe,
    formatter: formatInt,
    unit: 'watts',
    defaultValue: '-'
  },
  {
    id: 'cadence',
    name: 'Cadence',
    subscribe: COBI.rideService.cadence.subscribe,
    unsubscribe: COBI.rideService.cadence.unsubscribe,
    formatter: formatInt,
    unit: 'rpm',
    defaultValue: '-'
  },
  {
    id: 'distance',
    name: 'Distance',
    subscribe: COBI.tourService.ridingDistance.subscribe,
    unsubscribe: COBI.tourService.ridingDistance.unsubscribe,
    formatter: formatDistanceDot1,
    unit: 'km total',
    defaultValue: '-'
  },
  {
    id: 'calories',
    name: 'Calories',
    subscribe: COBI.tourService.calories.subscribe,
    unsubscribe: COBI.tourService.calories.unsubscribe,
    formatter: formatInt,
    unit: 'kcal',
    defaultValue: '-'
  },
  {
    id: 'ascent',
    name: 'Ascent',
    subscribe: COBI.tourService.ascent.subscribe,
    unsubscribe: COBI.tourService.ascent.unsubscribe,
    formatter: formatInt,
    unit: 'm',
    defaultValue: '-'
  },
  {
    id: 'heart_rate',
    name: 'Heart Rate',
    subscribe: COBI.rideService.heartRate.subscribe,
    unsubscribe: COBI.rideService.heartRate.unsubscribe,
    formatter: formatInt,
    unit: 'bpm',
    defaultValue: '-'
  },
  {
    id: 'duration',
    name: 'Duration',
    subscribe: COBI.tourService.ridingDuration.subscribe,
    unsubscribe: COBI.tourService.ridingDuration.unsubscribe,
    formatter: formatMins,
    unit: 'min',
    defaultValue: '-'
  }
];
