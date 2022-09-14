import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='NavContainer'>
            
              <span>Rata</span>
            
                <ul className='NavItem'>
                    <li>Home</li>
                    <li>Our Portfolio</li>
                    <li>Our team</li>
                    <li>Contact us</li>
                    

                </ul>
                <button>login</button>
        </div>
    );
};

export default Navbar;