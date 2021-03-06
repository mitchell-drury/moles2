import React, {Component} from 'react';
import Axios from 'Axios';

export default class Login extends Component {
    constructor (props) {
        super (props);
        this.state = {
            username: '',
            password: ''
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this, props.setLoggedIn);
        this.handleSignup = this.handleSignup.bind(this, props.setLoggedIn);
    }

    handleUsernameChange (event) {
        event.preventDefault();
        this.setState({username: event.target.value});
    }

    handlePasswordChange (event) {
        event.preventDefault();
        this.setState({password: event.target.value});
    }

    handleLogin (setLoggedIn, event) {
        event.preventDefault();
        Axios.post('/account/login', {
            username: this.state.username,
            password: this.state.password
        }).then(function (response) {
            console.log('login message:', response);
            setLoggedIn();
        })        
    }

    handleSignup (setLoggedIn, event) {
        event.preventDefault();
        Axios.post('/account/signup', {
            username: this.state.username,
            password: this.state.password
        }).then(function (response) {
            console.log('create message:', response);
            setLoggedIn();
        })
    }

    render () {
        return (
            <div id="account">
                <form>
                    <input id="username" type="text" name="name" placeholder="Email" onChange={this.handleUsernameChange}/>
                    <input id="password" type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange}/>
                    <button id="login" className='button' type="submit" onClick={this.handleLogin}> Login </button>
                    <button id="signup" className='button' type="submit" onClick={this.handleSignup}> Signup </button>
                </form>
            </div>
        )
    }
} 