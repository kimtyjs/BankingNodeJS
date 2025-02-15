import React, {useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Input
} from "reactstrap";

import routes from "../../routes/routes";

const NavigationBar = props => {

    const [ isOpen, setIsOpen ] = useState(false);
    const [ dropdownOpen, setDropdownOpen ] = useState(false);
    const [ color, setColor ] = useState("transparent");
    const sidebarToggle = useRef();

    const toggle = () => {
        if(isOpen) {
            setColor("transparent");
        } else {
            setColor("dark")
        }

        setIsOpen(!isOpen);
    };

    const dropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const getBrand = () => {
        let brandName = "DefaultBrand";
        routes.map((prop, key) => {
            if(window.location.href.indexOf(prop.layout + prop.path) !== -1) {
                brandName = prop.name;
            }
            return null;
        });
        return brandName;
    };

    const openSidebar = () => {
        document.documentElement.classList.toggle("nav-open");
        sidebarToggle.current.classList.toggle("toggled");

    };

    useEffect(() => {   //similar to componentDidMount
        function updateColor() {
            if(window.innerWidth < 993 && isOpen) {
                setColor("dark");
            } else {
                setColor("transparent");
            }
        }
        window.addEventListener("resize", updateColor);

    }, [isOpen]);

    useEffect(() => {   //similar to componentDidUpdate
        if(window.innerWidth < 993 &&
            props.history.location.pathname !== props.location.pathname &&
            document.documentElement.className.indexOf("nav-open") !== -1
        ) {

            document.documentElement.classList.toggle("nav-open");
            sidebarToggle.current.classList.toggle("toggled");
        }
    }, [props.history, props.location]);


    return(
        <Navbar
            color = {
                props.location.pathname.indexOf("full-screen-maps") !== -1
                    ? "dark"
                    : color
            }
            expand="lg"
            className={
                props.location.pathname.indexOf("full-screen-maps") !== -1
                    ? " navbar-absolute fixed-top "
                    : " navbar-absolute fixed-top " +
                    (color === "transparent" ? "navbar-transparent " : "")
            }
        >
            <Container fluid>
                <div className="navbar-wrapper">
                    <div className="navbar-toggle">
                        <button
                            type="button"
                            ref={ sidebarToggle }
                            className="navbar-toggler"
                            onClick={ openSidebar  }
                        >
                            <span className="navbar-toggler-bar bar1" />
                            <span className="navbar-toggler-bar bar2" />
                            <span className="navbar-toggler-bar bar3" />
                        </button>
                    </div>
                    <NavbarBrand href="/">
                        { getBrand() }
                    </NavbarBrand>
                </div>
                <NavbarToggler onClick={ toggle }>
                    <span className="navbar-toggler-bar navbar-kebab" />
                    <span className="navbar-toggler-bar navbar-kebab" />
                    <span className="navbar-toggler-bar navbar-kebab" />
                </NavbarToggler>
                <Collapse
                    isOpen={ isOpen }
                    navbar
                    className="justify-content-end"
                >
                    <form>
                        <InputGroup className="no-border">
                            <Input placeholder="Search ..."/>
                            <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <i className="nc-icon nc-zoom-split"/>
                                </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </form>
                    <Nav navbar >
                        <NavItem>
                            <Link to="#google" className="nav-link btn-magnify" >
                                <i className="nc-icon nc-layout-11"/>
                                <p>
                                    <span className="d-lg-none d-md-block"> status </span>
                                </p>
                            </Link>
                        </NavItem>
                        <Dropdown
                            nav
                            isOpen={ dropdownOpen }
                            toggle={ () => dropdownToggle() }
                        >
                            <DropdownToggle caret nav>
                                <i className="nc-icon nc-bell-55" />
                                <p>
                                    <span className="d-lg-none d-md-block">Some Actions</span>
                                </p>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem tag="a">Action</DropdownItem>
                                <DropdownItem tag="a">Another Action</DropdownItem>
                                <DropdownItem tag="a">Something else here</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <NavItem>
                            <Link to="#google" className="nav-link btn-rotate">
                                <i className="nc-icon nc-settings-gear-65" />
                                <p>
                                    <span className="d-lg-none d-md-block">Account</span>
                                </p>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
};
export default NavigationBar;
