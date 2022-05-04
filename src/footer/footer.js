import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col-md-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9EXUSa_uX8p8GJQ5Si7rIMf4OOPxK5Piag&usqp=CAU" id='logo-f' alt='logo'/>
                    <h3>Classic store</h3>
                    <h5>Get the safest and</h5>
                    <h5>Most reliable storage</h5>
                    <div className="social-icons">
                    <FaFacebook/> <FaInstagram/> <FaTwitter/>
                    </div>
                </div>
                <div className="col-md-2">
                    <h3>Explore</h3>
                    <p>Home</p>
                    <p>Details</p>
                    <p>Signup</p>
                    <p>Login</p>
                </div>
                <div className="col-md-2">
                    <h3>Visit</h3>
                    <p>Morghaki Building</p>
                    <p>Lavinge Street</p>
                    <p>Nairobi CBD, Kenya</p>
                </div>
                <div className="col-md-2">
                    <h3>Legal</h3>
                    <p>Terms</p>
                    <p>Privacy</p>
                </div>
                <div className="col-md-2">
                    <h3>Contact Us</h3>
                    <a href="gmail.com">classicstore@info.org.ke</a>
                    <p>020-9546 5678</p>
                    <p>+254787000000</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;