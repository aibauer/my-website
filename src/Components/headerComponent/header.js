import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';
//components

//includes


  class Header extends Component {
    render() {
      return (
        <header>
           <div className='logo'>
                AIB
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li classname='last'>
                        <Link to="/Projects">Projects</Link>
                    </li>
                </ul>
            </nav>
        </header>
      );
  }  
}


export default Header;