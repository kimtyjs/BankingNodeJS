import React, { useState } from "react"
import { Link } from "react-router-dom"

const NavbarFrontend = ({ logo, menuClass }) => {

    const [btnRight] = useState("karl-side-menu-open");

    const isBtnRightClick = () => {

        menuClass(btnRight);
    };

    return(
        <header>
            <div className="top_header_area">
                <div className="container-fluid h-100">
                    <div className="row h-100 align-items-center justify-content-around">
                       <div className="top_logo">
                           <Link to="#">
                               <img src={ logo } alt="logo_img"/>
                           </Link>
                       </div>
                        <div className="search_bar">
                            <div className="input-group minus-f align-items-center justify-content-center">
                                <div className="input-group-prepend search-panel">
                                    <button type="button" className="btn minus-btn-u btn-outline-secondary dropdown-toggle"
                                            data-toggle="dropdown">
                                        <span id="search_concept">All</span> <span className="caret"/>
                                    </button>
                                    <div className="dropdown-menu scrollable-dropdown" role="menu">
                                        <Link className="dropdown-item" to="#">Banking List</Link>
                                        <Link className="dropdown-item" to="#">Bank Rating</Link>
                                        <Link className="dropdown-item" to="#">Exchange Rage</Link>
                                        <Link className="dropdown-item" to="#">Product</Link>
                                        <Link className="dropdown-item" to="#">News</Link>
                                        <Link className="dropdown-item" to="#">Contact</Link>
                                        <Link className="dropdown-item" to="#">Service</Link>
                                        <Link className="dropdown-item" to="#">Support</Link>
                                    </div>
                                </div>
                                <input type="hidden" name="search_param" value="all" id="search_param"/>
                                <input type="text" className="form-control" name="x" id="search" placeholder="Search"/>
                                <div className="input-group-prepend">
                                    <button className="btn minus-btn-u btn-outline-secondary minus-btn-d" type="button">
                                        <i className="fas fa-search"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="header-right-side-menu ml-15">
                            <Link to="#" id="sideMenuOpen" onClick={ isBtnRightClick } className="link-btn" >
                                <i className="fa fa-bars" aria-hidden="true"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <nav id="navigation " className="main_header_area">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-12 d-md-flex justify-content-between">
                            <div className="languages-area">
                                Khmer | English
                            </div>
                            <div className="main-menu-area">
                                <ul className="main-nav nav navbar-nav">
                                    <li className="active"><Link to="#">Home</Link></li>
                                    <li><Link to="#">Pages</Link></li>
                                    <li><Link to="#">Contact</Link></li>
                                    <li><Link to="#">Support</Link></li>
                                </ul>
                            </div>
                            <div className="help-line">
                                <Link to="#"><i className="ti-headphone-alt"/> Account </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavbarFrontend;