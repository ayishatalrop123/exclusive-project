import React from 'react'
import "./Footer.css"

import sent from "../Assets/icon-send.svg"
import qrcode from "../Assets/Frame 719.png"
import facebook from "../Assets/Icon-Facebook.svg"
import twitter from "../Assets/Icon-Twitter.svg"
import instagram from "../Assets/icon-instagram.svg"
import linkedin from "../Assets/Icon-Linkedin.svg"

const Footer = () => {
    return(
        <div className='footer'>
            <div className='wrapper'>
                <ul>
                    <li>
                        <h4>Exclusive</h4>
                        <h5>Subscribe</h5>
                        <p className='para'>Get 10% off your first order</p>
                        <div className='inputbox'>
                             <input type="text" placeholder='Enter your email'/>
                             <span><img src={sent} alt='sent'/></span>
                        </div>
                    </li>
                    <li>
                        <h5>Support</h5>
                        <p className='para'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p className='para'>exclusive@gmail.com</p>
                        <p className='para'>+88015-88888-9999</p>
                    </li>
                    <li>
                        <h5>Account</h5>
                        <div className='link'>
                        <a href='#anchor'>My Account</a>
                        <a href='#anchor'>Login/Register</a>
                        <a href='#anchor'>Cart</a>
                        <a href='#anchor'>Wishlist</a>
                        <a href='#anchor'>Shop</a>
                        </div>
                    </li>
                    <li>
                        <h5>Quick Link</h5>
                        <a href='#anchor'>Privacy Policy</a>
                        <a href='#anchor'>Terms Of Use</a>
                        <a href='#anchor'>FAQ</a>
                        <a href='#anchor'>Contact</a>
                    </li>
                    <li>
                    <h5>Download App</h5>
                    <h6>Save $3 with App New User Only</h6>
                        <div className='qr'>
                            <img src={qrcode} alt='qr'/>
                        </div>
                        <div className='social'>
                            <a href="https://www.facebook.com/"><img src={facebook} alt='facebook' /></a>
                            <a href='https://www.twitter.com/'><img src={twitter} alt='twitter'/></a>
                            <a href='https://www.instagram.com/'><img src={instagram} alt='insta'/></a>
                            <a href='https://www.linkedin.com/'><img src={linkedin} alt='linkedin'/></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer