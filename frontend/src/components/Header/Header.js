import React from 'react';
import './Header.css'
import headerphoto from '../../images/Frame.png'

const Header = () => {
    return (
        <div className='hContainer'>
            <div className='hWrapper'>
               <div className='tContainer'>
                  <h1 className='hHeader'>Lets grow your<br/>
                    Brand to the <br/>
                    next level
                  </h1>
                  <p className='hDesc'>something you need to do

                  </p>
                  <button className='hireButton'>Hire Us</button>
               </div>
               <div className='hImContainer'>
                <img className='HImg' src={headerphoto}/>
               </div>
            </div>
            
        </div>
    );
};

export default Header;