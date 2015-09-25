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
