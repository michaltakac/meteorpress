PostLayout = React.createClass({
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
      <div>
        <PostHeader post={this.data.post} />
        <PostBody post={this.data.post} /> 
      </div>
    );
  },
  render() {
    return (this.data.post)? this.getContent() : <div>loading...</div>;
  }
});

