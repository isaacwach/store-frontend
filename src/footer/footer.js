import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="social-icons">
               <FaFacebook/> <FaInstagram/> <FaTwitter/>
            </div>
            <div className="privacy">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
            </div>
            <p>@2020 Classic Store</p>
        </footer>
    )
}
export default Footer