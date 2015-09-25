Loop = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
    var selector = {};
    var handle = Meteor.subscribe('posts');
    var data = {};
    if(handle.ready()) {
      data.posts = Posts.find({}, {sort: {createdAt: -1}}).fetch();
    }

    return data;
  },
  getList() {
    return (
      <div>
      {this.data.posts.map((task) => {
        var author = Meteor.users.findOne(task.author);
        var createdDate = moment(task.createdAt).format('Do MMMM YYYY');
        return ( <PostExcerpt task={task} date={createdDate} /> );
      })}
      </div>
    );
  },
  render() {
    return (
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          {(this.data.posts)? this.getList() : "loading..."}
        </div>
      </div>
    );
  }
});

PostExcerpt = React.createClass({
  render() {
    return (
      <div>
        <div className="post-preview">
          <a href={FlowRouter.path('post', {_id: this.props.task._id})}>
            <h2 className="post-title">
              {this.props.task.title}
            </h2>
          </a>
          <p className="post-meta">Posted by <a href="#">{this.props.author}</a> on {this.props.date}</p>
        </div>
        <hr />
      </div>
    );
  }
});
