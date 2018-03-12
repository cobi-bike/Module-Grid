COBI.init('token');

COBI.app.clockVisible.write(false);
COBI.devkit.overrideThumbControllerMapping.write(true);

// Disable Reordering in Experience
if (COBI.parameters.state() == COBI.state.experience) {
  document.getElementById('main-grid').classList.add('uk-sortable-nodrag');
}
