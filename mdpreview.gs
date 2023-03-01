/**
 * Create a menu entry in the Google Docs UI when the document is opened.
 *
 * @param {object} e The event parameter for a simple onOpen trigger.
 */
function onOpen(e) {
  DocumentApp.getUi().createAddonMenu()
      .addItem('Start', 'showSidebar')
      .addToUi();
}

/**
 * Run the add-on when it is installed.
 *
 * @param {object} e The event parameter for a simple onOpen trigger.
 */
function onInstall(e) {
  onOpen(e);
}

/**
 * Open a sidebar in the document containing the add-on's user interface.
 */
function showSidebar() {
  // set the tie
  var ui = HtmlService.createHtmlOutputFromFile('sidebar')
      .setTitle('Markdown Preview');
  DocumentApp.getUi().showSidebar(ui);
}
