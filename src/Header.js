import React, {useContext} from 'react';
import {AuthContext} from './context/auth';
import { useNavigate } from "react-router-dom";

function Header(){
    const context = useContext(AuthContext);


    const navbar = context.user?(
    <div className="wtf" style ={{backgroundColor:"black"}}>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"
    style={{
    }}>
    <a className="navbar-brand" href="/">Hello {context.user.username}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            {/* <a className="nav-link" onClick={context.logout}>Logout<span className="sr-only">(current)</span></a> */}
            <button type="submit" className="btn btn-primary" onClick={context.logout}>Logout</button>
        </li>
        {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#hone" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#home">Action</a>
            <a className="dropdown-item" href="#home">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#home">Something else here</a>
            </div>
        </li> */}

        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */}
    </div>
    </nav>
    </div>):(
                <div className="wtf" style ={{backgroundColor:"black"}}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark"
                style={{
                }}>
                <a className="navbar-brand" href="/">Home</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/register">Register<span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/login">Login</a>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#hone" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#home">Action</a>
                        <a className="dropdown-item" href="#home">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#home">Something else here</a>
                        </div>
                    </li> */}
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                </nav>
                </div>
    );
    return navbar;
}

export default Header;