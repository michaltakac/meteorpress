BlogLayout = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {this.props.content}
        </div>
        <Footer />
      </div>
    );
  }
});
