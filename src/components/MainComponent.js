import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import localStorage from 'local-storage';

import Header from './HeaderComponent';
import Login from './LoginComponent';
import Profile from './ProfileComponent';
import News from './NewsComponent';
import MainPage from './PageComponent';


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            name: 'Danis'
        }
        this.eventUpdate = this.eventUpdate.bind(this);
    }

    eventUpdate() {
        this.setState({
            loggedIn: !this.state.loggedIn
        })
        const isLogged = !localStorage.get('loggedIn');
        localStorage.set('loggedIn', isLogged);
    }

    componentDidMount(){
        localStorage.set('loggedIn', false);
        localStorage.set('username', 'Admin');
        localStorage.set('password', '12345');
    }
    
    render () { 
        return (
            <div>
                <Header loggedIn={this.state.loggedIn} eventUpdate={this.eventUpdate} />
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route path='/login'> 
                        {this.state.loggedIn ? <Profile loggedIn={this.state.loggedIn}/> : <Login eventUpdate={this.eventUpdate}/> }
                    </Route>
                    <Route path='/news' component={News} />
                    <Route path='/profile'> 
                        {this.state.loggedIn ? <Profile loggedIn={this.state.loggedIn}/> : <Redirect to='/login'/> }
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Main;