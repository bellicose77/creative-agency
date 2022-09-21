import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'
import imge from '../../images/logo.png'

const Navbar = () => {
    return (
        <div className='navContainer'>
          <div className='navWrapper'>
            <div className='nlogo'>
              <Link to='/'>
              <img className='logoImg' src={imge}/>
              </Link>
             
            </div>
            <div className='nItem'>
              <div><Link to='/'>
              Home
              </Link></div>
              
               
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