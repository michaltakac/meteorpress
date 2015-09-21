var Future = Npm.require('fibers/future');

Meteor.methods({
  insertDocument: function(){
    var fut = new Future();

    // We should't assign default title like this here... needs refractoring
    var doc = {
      title: "Post title"
    }

    try {
      var documentId = Posts.insert(doc);
      fut['return'](documentId);
    } catch(exception) {
      fut['return'](exception);
    }

    return fut.wait();
  },
  updateDocument: function( changes ){
    check( changes, {
      _id: String,
      markdown: Match.Optional( String ),
      content: Match.Optional( String ),
      title: Match.Optional( String )
    });

    var doc = changes._id;
    delete changes._id;

    try {
      var documentId = Posts.update( doc, {
        $set: changes
      });
      return documentId;
    } catch(exception) {
      return exception;
    }
  },
  convertMarkdown: function( markdown ){
    check( markdown, String );
    return parseMarkdown( markdown );
  }
});
