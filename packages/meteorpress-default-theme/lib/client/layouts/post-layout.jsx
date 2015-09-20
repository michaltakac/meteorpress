PostLayout = React.createClass({
  render() {
    return (
      <div>
        {this.props.postHeader}
        <article>
          {this.props.content}
        </article>
        <hr />
        <Footer />
      </div>
    );
  }
});
