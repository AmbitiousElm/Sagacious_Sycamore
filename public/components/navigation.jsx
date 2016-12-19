class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.logoutHandler = this.logoutHandler.bind(this);
  }

  logoutHandler() {
    var that = this;
    $.ajax({
      method: 'GET',
      url: '/logout',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    })
    .success(function() {
        browserHistory.currentUser = null;
        browserHistory.push({
          pathname: '/login'
        })
    })
  }

  render() {
    return (
      <div>
        <nav className="navigation navbar navbar-dark bg-primary">
          <span className="navbar-brand">Welcome to HRGotchi, {this.props.user}!</span>
          <span><button className="btn btn-sm btn-outline-success float-xs-right navbar-text" onClick={this.logoutHandler}>Logout</button></span>
        </nav>
      </div>
    )
  }
}

window.NavigationBar = NavigationBar;
