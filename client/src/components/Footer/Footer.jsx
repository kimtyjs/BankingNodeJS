import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Footer = props => {

    const [date, setDate] = useState("");

    useEffect(() => {
        setDate(`${new Date().getFullYear()}`)
    }, []);

    return(
        <footer
            className={"footer" + (props.default ? " footer-default " : "")}
        >
            <Container fluid = { !!props.fluid }>
                <Row>
                    <nav className="footer-nav">
                        <ul>
                            <li>
                               <Link to="https://blog.creative-tim.com" target="_blank">
                                    Blog
                               </Link>
                            </li>
                            <li>
                                <Link to="https://www.creative-tim.com/license" target="_blank">
                                    License
                                </Link>
                            </li>
                            <li>
                                <Link to="www.google.com/banking" target="_blank">
                                    Banking24@
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="credits ml-auto">
                        <div className="copyright">
                            &copy; { date }
                        </div>
                    </div>
                </Row>
            </Container>
        </footer>
    );
};

Footer.propTypes = {
    default: PropTypes.bool,
    fluid: PropTypes.bool
};

export default Footer;