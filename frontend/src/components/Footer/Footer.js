import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footerWrapper'>
                <div className='footerTextContainer'>
                   <div className='tH'>
                    <h3>Let us handle your<br/>project,professionally</h3>
                   </div>
                   <div className='pH'>
                    <p>with well written colors,we build amazing apps for all<br/>
                    platform, mobiles and web app in generall
                    </p>
                   </div>
                </div>
                <div className='footerFormContainer'>
                    <div className='ff'>
                    <form>
                    <input id='xx' type="text" placeholder="Your email"/><br/>
                    <input id='xxx' type="text" placeholder="Your name/Your company"/><br/>
                    <textarea id='xxxx'/>
                   </form>
                   <button id='bu'>Send</button>
                    </div>
                  
                </div>

            </div>
            
        </div>
    );
};

export default Footer;