Header = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top" role="navigation">
        <div className="container">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" dataToggle="collapse" dataTarget="#main-nav">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">Project Title</a>
          </div>

          <div className="collapse navbar-collapse" id="main-nav">

              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" dataToggle="dropdown">
                    <i className="fa fa-user"></i> Test <i className="fa fa-caret-down"></i>
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li><a href="#" data-action="logout"><i className="fa fa-lock"></i> Sign Out</a></li>
                  </ul>
                </li>
              </ul>

            <ul className="nav navbar-nav navbar-right">
              <li className="{{ isActivePath regex='home' }}"><a href="/"><i className="fa fa-home"></i> Home</a></li>
              <li className="{{ isActivePath regex='dashboard' }}"><a href="/dashboard"><i className="fa fa-gear"></i> Dashboard</a></li>
            </ul>
          </div>

        </div>
      </nav>
    );
  }
});
