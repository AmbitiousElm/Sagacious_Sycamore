class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }


  handleSubmit(e){
    e.preventDefault();
    var that = this;
    $.ajax({
      method: 'POST',
      url: '/login',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      data: {username: that.state.username, password: that.state.password}
    }).success(function(data) {
      // if data = true, user is found and route to home. if false, stay on login page
      if (data) {
        browserHistory.currentUser = that.state.username;
        that.props.router.push({pathname: '/home'});
      } else {
        console.log('not a valid user');
      }
    });
  }

  handleUserChange(e){
    this.setState({
      username: e.target.value
    });
  }

  handlePasswordChange(e){
    this.setState({
      password: e.target.value
    });
  }

  render() {
    return (
      <div className='signin-box container'>
        <div className="row">
        <form className='form-signin' onSubmit={this.handleSubmit}>
          <h2 className='form-signin-header'>HR50 Sign In</h2>
          <div class="form-group">
            <input onChange={this.handleUserChange} type='text' class="form-control" id='username' className='form-control' placeholder='Enter username' />
          </div>
          <div class="form-group">
            <input onChange={this.handlePasswordChange} type='password' class="form-control" id='password' className='form-control' placeholder='Enter password' />
          </div>
          <input type='checkbox' value='remember-me' /> <label> Remember Me </label>
          <button className='btn btn-large btn-primary btn-block' type='submit'>Submit</button>
        </form>
        <Link to='signup'>New User? Click here</Link>
        </div>
      </div>
    )
  }
}

window.Login = Login;
