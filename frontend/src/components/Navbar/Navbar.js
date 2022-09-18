import React from 'react';
import './Navbar.css'
import imge from '../../images/logo.png'

const Navbar = () => {
    return (
        <div className='navContainer'>
          <div className='navWrapper'>
            <div className='nlogo'>
              <img className='logoImg' src={imge}/>
            </div>
            <div className='nItem'>
               <div>Home</div>
               <div>Our Portfolio</div>
               <div>Our team</div>
               <div>Contact Us</div>
               <button className='lButton'>Login</button>
            </div>
            
          </div>
        </div>
    );
};

export default Navbar;