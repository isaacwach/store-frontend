import React from 'react';
// import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col-md-3">
                    <img src="" />
                    <h3>Classic store</h3>
                    <p>Get the safest and</p>
                    <p>Most reliable storage</p>
                    <div className="social-icons">
                    {/* <FaFacebook/> <FaInstagram/> <FaTwitter/> */}
                    </div>
                </div>
                <div className="col-md-2">
                    <h3>Explore</h3>
                    <a> <p>Home</p> </a>
                    <a> <p>Details</p> </a>
                    <a> <p>Signup</p> </a>
                    <a> Login</a>
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
                    <a>classicstore@info.org.ke</a>
                    <p>020-9546 5678</p>
                    <p>+254787000000</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;