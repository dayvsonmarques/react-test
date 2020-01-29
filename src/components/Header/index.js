import React from 'react';
import {
    Navbar,
    Nav,
    NavItem
} from 'react-bootstrap';
import './style.scss';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <div className="container">
            <div className="row">
                <div className="col-12 text-right">
                    <p className="label-user-logged">Olá, seja bem vindo/a, nome da pessoa!</p>  
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12 text-center pb-4">
                    <h1>
                        <Link to="/" className="title-logo">React Graphs Test</Link>
                    </h1>
                </div>
            </div>
        </div>

        <Navbar bg="light" expand="lg">
            <Nav className="menu-horizontal p-1 text-center" navbar>
                <NavItem>
                    <NavLink to="/high-posts">High Posts</NavLink>
                </NavItem>
                {/* <NavItem>
                    <NavLink to="/persons">Persons</NavLink>
                </NavItem>                 */}
                <NavItem>
                    <NavLink to="/todos-percentual">To Dos %</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/albums-photos">Albums Photos</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/users-albums">Users Albums</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    </header>
);

export default Header;