class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    // this.logoutHandler = this.logoutHandler.bind(this);
  }

  // logoutHandler() {
  //   var that = this;
  //   $.ajax({
  //     method: 'GET',
  //     url: '/logout',
  //     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  //   })
  //   .success(function() {
  //       browserHistory.currentUser = null;
  //       browserHistory.push({
  //         pathname: '/login'
  //       })
  //   })
  // }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary">
          <div className="container-fluid">
            <span className="navbar-left">Welcome to HRGotchi, {this.props.user}!</span>
            <br />
            {/* <span className="navbar-right" onClick={this.logoutHandler}>Logout</span> */}
          </div>
        </nav>
      </div>
    )
  }
}

window.NavigationBar = NavigationBar;
