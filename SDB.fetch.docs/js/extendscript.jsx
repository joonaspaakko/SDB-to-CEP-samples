
function getDocs() {

  var docNames = [];
  var docs = app.documents;
  for ( var i=0; i < docs.length; i++ ) {
    docNames.push( docs[i].name );
  }

  return docNames.join();

}

function openDoc( docName ) {
  
  try {
    app.activeDocument = app.documents.getByName( docName ); // AI, PS
  }
  catch(e) {
    app.activeDocument = app.documents.itemByName( docName ); // INDD
  }
  
}
