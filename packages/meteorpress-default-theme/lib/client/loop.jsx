Loop = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
    var selector = {};
    var handle = Meteor.subscribe('posts');
    var data = {};
    if(handle.ready()) {
      data.posts = Posts.find({}, {sort: {createdAt: 1}}).fetch();
    }

    return data;
  },
  getList() {
    return ( <div>
      {this.data.posts.map(function(task) {
        var path = FlowRouter.path('post', {_id: task._id});
        return ( <div>
            <div className="post-preview">
            <a href={path}>
              <h2 className="post-title">
                {task.title}
              </h2>
              <h3 className="post-subtitle">
                {task.post}
              </h3>
            </a>
            <p className="post-meta">Posted by <a href="#">Start Bootstrap</a> on September 24, 2014</p>
          </div>
          <hr />
        </div> );
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
