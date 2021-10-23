import React, { Component } from "react";
import axios from 'axios'
import './Login.css'
import logo from './Icono.png'
import computador from './Foto Login.jpg'
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { withRouter } from 'react-router-dom';

const CLIENT_ID = "788811814863-doldm5d1gdgpgp1qj9vkeq7m8qnbrs9d.apps.googleusercontent.com"

class Login extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            userInfo: {
              name: "",
              emailId: "",
            },
          };
        }
      
    // Success Handler
    responseGoogleSuccess = async (response) => {
        try {
            console.log(response.profileObj)
            const result = await axios.post('http://localhost:5000/verificarRol', {
                id: response.profileObj.googleId,
                nombre: response.profileObj.givenName,
                apellido: response.profileObj.familyName,
                correo: response.profileObj.email
            });
            console.log(result)

            let userInfo = {
                name: response.profileObj.name,
                emailId: response.profileObj.email,
            };
            this.setState({ userInfo, isLoggedIn: true });
            this.props.history.push({
                pathname: `/home`
            });
        } catch (error) {
            
        }
    };
      
    // Error Handler
    responseGoogleError = (response) => {
        console.log(response);
    };
      
    // Logout Session and Update State
    logout = (response) => {
        console.log(response);
        let userInfo = {
            name: "",
            emailId: "",
        };
        this.setState({ userInfo, isLoggedIn: false });
    };
    
    render() {
        return (
            <div>
                <div className="contenedor">
                    <div className="login-img">
                        <img src={computador} alt="Imagen lateral" />
                    </div>
                    <div className="section_right">
                        <div className="section_right_container">
                            <img src={logo} width="100" height="100" alt="Logo" />
                        </div>
                        <div classNameName="section_right_container_form">
                            <form>
                                <div className="form-group">
                                    <div className="content-username" >
                                        <input className="form-control" type="email" name="email" placeholder="Gmail" required="required" />
                                    </div>
                                    <div className="content-password" >
                                        <input className="form-control" type="text" name="password" placeholder="Password" required="required" />
                                    </div>
                                    <div className="content-button" id="lower">
                                        <button type="submit" className="btn">Login</button>
                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                                {this.state.isLoggedIn ? (
                                                    <div>
                                                     <h1>Welcome, {this.state.userInfo.name}</h1>
                                                        <GoogleLogout
                                                        clientId={CLIENT_ID}
                                                        onLogoutSuccess={this.logout}
                                                        ></GoogleLogout>
                                                    </div>
                                                    ) : (
                                                    <GoogleLogin
                                                    clientId={CLIENT_ID}
                                                    buttonText="Sign In with Google"
                                                    onSuccess={this.responseGoogleSuccess}
                                                    onFailure={this.responseGoogleError}
                                                    isSignedIn={true}
                                                    cookiePolicy={"single_host_origin"}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);