import React from 'react'
import './Login.css'
import logo from './Icono.png'
import computador from './Foto Login.jpg'

const Login = () => {
    return (        
            <body>
                <div className="contenedor">
                    <div className="login-img">
                        <img src={computador} />
                    </div>
                    <div className="section_right">
                        <div className="section_right_container">
                            <img src={logo} width="100" height="100" />
                        </div>
                        <div className="section_right_container_form">
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
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
        
    )
}

export default Login
