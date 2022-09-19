import React from 'react';
import {Link} from 'react-router-dom'
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
               <Link to='/login'>
               <button className='lButton'>Login</button>
               </Link>
               
            </div>
            
          </div>
        </div>
    );
};

export default Navbar;