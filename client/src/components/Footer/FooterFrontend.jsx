import React from "react";
import { Link } from "react-router-dom";

import footerLogo from "../../assets/img/logo/logo.png";

const FooterFrontend = () => {
    return(
        <footer>
            <div className="footer_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="single-footer-area">
                                <div className="footer-logo">
                                    <img src={ footerLogo } alt="footer-logo"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                            <div className="single-footer-area">
                                <ul className="footer-widget-menu">
                                    <li><Link to="#">My Account</Link></li>
                                    <li><Link to="#">Shipping</Link></li>
                                    <li><Link to="#">Our Policies</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                            <div className="single-footer-area">
                                <ul className="footer-widget-menu">
                                    <li> <Link to="#"> About </Link> </li>
                                    <li> <Link to="#"> Blog </Link> </li>
                                    <li> <Link to="#"> Faq </Link> </li>
                                    <li> <Link to="#"> Contact </Link> </li>
                                    <li> <Link to="#"> Detail </Link> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="single-footer-area">
                                <div className="footer_heading mb-30">
                                    <h6>Subscribe to our newsletter</h6>
                                </div>
                                <div className="subscribtion_form">
                                    <form action="#" method="post">
                                        <input type="email" name="mail" className="mail" placeholder="Your email here"/>
                                            <button type="submit" className="submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="line" />
                    <div className="footer_bottom_area">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer_social_area text-center">
                                    <Link to="#"><i className="fab fa-pinterest" aria-hidden="true"/></Link>
                                    <Link to="#"><i className="fab fa-facebook" aria-hidden="true"/></Link>
                                    <Link to="#"><i className="fab fa-twitter" aria-hidden="true"/></Link>
                                    <Link to="#"><i className="fab fa-linkedin" aria-hidden="true"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default FooterFrontend;