import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
    return(
        <>
            <form  className="login100-form validate-form">
                <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                    <input className="input100" type="text" name="email"/>
                    <span className="focus-input100" data-placeholder="Email"/>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Enter password">
						<span className="btn-show-pass">
							<i className="zmdi zmdi-eye"/>
						</span>
                    <input className="input100" type="password" name="pass"/>
                    <span className="focus-input100" data-placeholder="Password"/>
                </div>
                <div className="container-login100-form-btn">
                    <div className="wrap-login100-form-btn">
                        <div className="login100-form-bgbtn"/>
                        <button className="login100-form-btn">
                            Login
                        </button>
                    </div>
                </div>
            </form>
            <div className="text-center">
                <span className="txt1"> Don't you have an account? </span>
                <Link className="txt2" to="#">Sign Up</Link>
            </div>
        </>
    );
};

export default Login;