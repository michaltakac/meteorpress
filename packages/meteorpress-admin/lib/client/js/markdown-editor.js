var postId;

Template['markdown_editor'].onCreated(function() {
  this.saveState = new ReactiveVar();
});

Template['markdown_editor'].onRendered(function() {
  var self = this;

  postId = FlowRouter.getParam('_id');

  self.autorun(function() {
    self.subscribe('singlePost', postId);
  });

  this.editor = CodeMirror.fromTextArea( this.find( "#entry-markdown" ), {
    lineNumbers: false,
    fixedGutter: false,
    mode: "markdown",
    lineWrapping: true,
    cursorHeight: 0.85
  });

  initEditor(this);
});

Template['markdown_editor'].helpers({
  post: function() {
    return Posts.findOne(postId);
  },
  saving: function() {
    var saveState = Template.instance().saveState.get();
    return saveState;
  }
});

Template['markdown_editor'].events({
  'keyup .CodeMirror': function( event, template ) {
    var text = template.editor.getValue();

    template.saveState.set(true);

    if ( text !== "" ) {
      Meteor.promise( "convertMarkdown", text )
        .then( function( html ) {
          $( ".rendered-markdown" ).html( html );
          return Meteor.promise( "updateDocument", { _id: postId, markdown: text, content: html } );
        })
        .then( function() {
          delay( function() {
            template.saveState.set(false);
          }, 1000 );
        });
    }
  }
});

initEditor = function( template ) {
  Tracker.autorun( function( computation ) {
    var doc = Posts.findOne( {}, { fields: { "markdown": 1 } } );

    if ( doc && doc.markdown ) {

      Meteor.call( "convertMarkdown", doc.markdown, function( error, html ) {
        if ( error ) {
          console.log( error.reason );
        } else {
          $( ".rendered-markdown" ).html( html );
        }
      });

      template.editor.setValue( doc.markdown.trim() );

      computation.stop();
    }
  });
};
