import React from "react";
import {Link} from "react-router-dom";

const Register = () => {

    return(
        <>
            <form className="login100-form" >
                <div className="wrap-input100 validate-input" data-validate="Please Enter Username">
                    <input className="input100" type="text" name="name"/>
                    <span className="focus-input100" data-placeholder="Username"/>
                </div>
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
                <div className="wrap-input100 validate-input" data-validate="Please Enter phoneNumber">
                    <input className="input100" type="text" name="phoneNumber"/>
                    <span className="focus-input100" data-placeholder="Phone Number"/>
                </div>
                <div className="container-login100-form-btn">
                    <div className="wrap-login100-form-btn">
                        <div className="login100-form-bgbtn"/>
                        <button className="login100-form-btn">
                            Register
                        </button>
                    </div>
                </div>
            </form>
            <div className="text-center">
                <span className="txt1"> you already have an account? </span>
                <Link className="txt2" to="#">Sign In</Link>
            </div>
        </>

    );
};

export default Register;