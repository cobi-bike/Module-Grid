// Formatters

function formatLocation(value) {
  return value.bearing;
}

function formatInt(value) {
  return parseInt(value);
}

function formatDot1(value) {
  return parseInt(value * 10) / 10;
}

function formatSpeedInt(value) {
  return parseInt(value * 3.6);
}

function formatSpeedDot1(value) {
  var speed = formatDot1(value * 3.6).toString();
  return enforceDot1(speed);
}

function formatDistanceDot1(value) {
  var distance = formatDot1(value / 1000).toString();
  return enforceDot1(distance);
}

function formatStopwatch(value) {
  var min = parseInt(value / 60).toString();
  var sec = parseInt(value % 60).toString();
  if (min.length == 1) min = '0' + min;
  if (sec.length == 1) sec = '0' + sec;
  return min + ':' + sec;
}

function formatMins(value) {
  var min = parseInt(value / 60).toString();
  if (min.length == 1) min = '0' + min;
  return min;
}

function enforceDot1(stringValue) {
  return stringValue.indexOf('.') == -1 ? stringValue + '.0' : stringValue;
}
