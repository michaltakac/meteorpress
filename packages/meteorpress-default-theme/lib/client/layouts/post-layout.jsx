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
    return <div>
      <a href="/posts">Back</a>
      <h3>{this.data.post.title}</h3>
      <p>{this.data.post.post}</p>
      <p>Just for testing, print the slug here: {this.data.post.slug}</p>
    </div>;
  },
  render() {
    return (this.data.post)? this.getContent() : <div>loading...</div>;
  }
});
