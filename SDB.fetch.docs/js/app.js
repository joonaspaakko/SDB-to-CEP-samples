
// https://scriptui.joonas.me/docs/CEP-export/helper-functions/#sdb-inspector
SDB.inspector();

var csi = new CSInterface();
// https://scriptui.joonas.me/docs/CEP-export/thememanager/
SDB.themeManager.init( csi );

// https://scriptui.joonas.me/docs/CEP-export/helper-functions/#name
var dropdown = SDB.name('docsDropdown');
// https://scriptui.joonas.me/docs/CEP-export/dropdownlist/#empty
SDB.Dropdownlist.empty(dropdown);
getDocuments();

// FETCH DOCS
// https://scriptui.joonas.me/docs/CEP-export/helper-functions/#name
var button = SDB.name('fetchBtn');
// I used find('> div') here because items (elements with the attribute
// data-item-id) have padding on one side for spacing and so if you
// attach a click even to that, the user could effectively click the
// button by clicking the whitespace above the button (in this case).
$(button).find('> div').on("click", function() {
  getDocuments();
});

// OPEN ON SELECT
$(dropdown).on("onSelect", function( e ) {
  var docName =  e.detail.selection.text;
  csi.evalScript("openDoc('"+ docName +"')");
});

function getDocuments() {
  csi.evalScript("getDocs()", function( docNames ) {
    
    // https://scriptui.joonas.me/docs/CEP-export/dropdownlist/#empty
    SDB.Dropdownlist.empty(dropdown);
    docNames = docNames.split(',');
    for ( var name of docNames ) {
      // https://scriptui.joonas.me/docs/CEP-export/dropdownlist/#add
      SDB.Dropdownlist.add( dropdown, name );
    }

  });
}
