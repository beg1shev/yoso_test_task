import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar color='light' expand='md'>
                    <div className='container'>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className='nav-link' to='/'>
                                    <span className='fa fa-home fa-lg'></span> Main
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/news'>
                                    <span className='fa fa-newspaper-o fa-lg'></span> News
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/profile'>
                                    <span className='fa fa-user fa-lg'></span> Profile
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav navbar>
                            {this.props.loggedIn ?
                            <NavItem>
                                <Button outline color='primary' onClick={() => this.props.eventUpdate()}>
                                    <span className='fa fa-sign-out fa-lg'></span> Log out
                                </Button>
                            </NavItem>
                            :
                            <NavItem>
                                <NavLink className='nav-link' to='/login'>
                                    <Button outline color='primary'>
                                        <span className='fa fa-sign-in fa-lg'></span> Log in
                                    </Button>
                                </NavLink>
                            </NavItem>                    
                            }
                        </Nav>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Yoso Test Task</h1>
                                <p>Some information</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        )
    }
}

export default Header;