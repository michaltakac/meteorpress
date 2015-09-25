PostBody = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1"
               dangerouslySetInnerHTML={{__html: this.props.post.content}}>
          </div>
        </div>
      </div>
    );
  }
});
