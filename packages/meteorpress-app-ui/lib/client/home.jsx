// Home component - represents the whole app

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

Home = React.createClass({
  render() {
    return (
      <div>
        <div className="template-home">
          <div className="page-header">
            <h1>Home</h1>
          </div>

        </div>
      </div>
    );
  }
});

Welcome = React.createClass({
  render() {
    return (
      <div>
        <h1 className="title">Welcome</h1>
      </div>
    )
  }
})
