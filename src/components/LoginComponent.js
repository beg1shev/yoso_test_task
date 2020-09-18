import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import localStorage from 'local-storage';

class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            isAlertVisible: false
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.toggleAlert = this.toggleAlert.bind(this);
    }

    handleLogin(event) {
        event.preventDefault();
        if (event.target.username.value === localStorage.get('username') &&
            event.target.password.value === localStorage.get('password')){
                this.props.eventUpdate()
            }
        else {
            this.toggleAlert();
            event.target.reset();
        }
    }

    toggleAlert() {
        this.setState({
            isAlertVisible: !this.state.isAlertVisible
        })
    }
    render() {
        return (
            <>  
                <div className='container'>
                    <Alert className='col-6' color='warning' isOpen={this.state.isAlertVisible} toggle={this.toggleAlert}>
                        Username or password are incorrect!
                    </Alert>
                    <Form className='col-4' onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor='username'>Username</Label>
                            <Input type='text' id='username' name='username' />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='password'>Password</Label>
                            <Input type='password' id='password' name='password' />
                        </FormGroup>
                        <Button type='sumbit' value='sumbit' color='primary'>Log in</Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default Login;