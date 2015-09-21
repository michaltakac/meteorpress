PostBody = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var handle = Meteor.subscribe('singlePost', this.props._id);
    var data = {};
    if(handle.ready()) {
      data.post = Posts.findOne({_id: this.props._id});
    }

    return data;
  },
  getContent() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1"
               dangerouslySetInnerHTML={{__html: this.data.post.content}}>
          </div>
        </div>
      </div>
    );
  },
  render() {
    return (this.data.post)? this.getContent() : <div>loading...</div>;
  }
});
