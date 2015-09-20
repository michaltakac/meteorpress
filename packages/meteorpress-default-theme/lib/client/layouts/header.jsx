Header = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currentUser: Meteor.user()
    };
  },
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
          <div className="container-fluid">

              <div className="navbar-header page-scroll">
                  <button type="button" className="navbar-toggle" dataToggle="collapse" dataTarget="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="/">Simple blog</a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                      <li>
                          <a href="/">Home</a>
                      </li>
                      <li>
                          <a href="/about">About</a>
                      </li>
                      <li>
                          <a href="/contact">Contact</a>
                      </li>
                  </ul>
              </div>

          </div>
        </nav>

        <div className="intro-header" style={{backgroundImage: 'url(/images/home-bg.jpg)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div className="site-heading">
                            <h1>Clean Blog</h1>
                            <hr className="small" />
                            <span className="subheading">A Clean Blog Theme by Start Bootstrap</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
});
