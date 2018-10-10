import React, {Component} from 'react';
import App from '../App';
import HomePage from "../components/HomePage";
import TopNavBar from "../components/TopNavBar";
import LoginPage from "../components/LoginPage";

class Home extends Component {

  login = () => {
    this.props.auth.login();
  };

  logout = () => {
    this.props.auth.logout();
  };

  render() {

    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        {
          isAuthenticated() &&
          <div>
            <TopNavBar logout={this.logout}/>
            <HomePage/>
          </div>
        }
        {
          !isAuthenticated() && (
            <div>
                <LoginPage login={this.login}/>
            </div>
          )
        }
      </div>
    );
  }
}

export default Home;