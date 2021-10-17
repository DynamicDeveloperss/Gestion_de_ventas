import React from 'react'
import './Login.css'
import logo from './Icono.png'
import computador from './Foto Login.jpg'
import Header from '../header/Header';
import { useEffect, useState } from 'react';
const googleClientId = '788811814863-doldm5d1gdgpgp1qj9vkeq7m8qnbrs9d.apps.googleusercontent.com';

const loadGoogleScript = () => {

    (function () {
      const id = 'google-js';
      const src = 'https://apis.google.com/js/platform.js';
  
      const firstJs = document.getElementsByTagName('script')[0];
  
      if (document.getElementById(id)) { return; }
      const js = document.createElement('script');
      js.id = id;
      js.src = src;
      js.onload = window.onGoogleScriptLoad;
      firstJs.parentNode.insertBefore(js, firstJs);
    }());
  
  }

  const [gapi, setGapi] = useState();
  const [googleAuth, setGoogleAuth] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onSuccess = (googleUser) => {
    setIsLoggedIn(true);
    const profile = googleUser.getBasicProfile();
    setName(profile.getName());
    setEmail(profile.getEmail());
  };

  const onFailure = () => {
    setIsLoggedIn(false);
  }

  const renderSigninButton = (_gapi) => {
    _gapi.signin2.render('google-signin', {
      'scope': 'Continuar con Google{',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure 
    });
  }
 
 
  useEffect(() => {
    window.onGoogleScriptLoad = () => {
 
      const _gapi = window.gapi;
      setGapi(_gapi);
 
      _gapi.load('auth2', () => {
        (async () => { 
          const _googleAuth = await _gapi.auth2.init({
           client_id: googleClientId
          });
          setGoogleAuth(_googleAuth);
          renderSigninButton(_gapi);
        })();
      });
    }
    
    loadGoogleScript();
 
  }, []);


const Login = () => {
    return (
        <div>
            <body>
                <Header/>
                <div className="contenedor">
                    <div className="login-img">
                        <img src={computador} />
                    </div>
                    <div className="section_right">
                        <div className="section_right_container">
                            <img src={logo} width="100" height="100" />
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
                                    </div>
                                    <div className="App">
                                        <header className="App-header">
                                            <img src={logo} className="App-logo" alt="logo" />
                                                {!isLoggedIn &&
                                                     <div id="google-signin">
                                                     </div>
                                                }
                                        </header>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default Login
