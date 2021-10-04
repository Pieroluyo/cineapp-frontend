import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';
//import logo from "../assets/logo.png"

export const AuthRouter = () => {
    return ( 
        
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-lg-12">
                    <header className="d-flex align-items-center">
                        <img src="/logo.png" alt="logo cineplanet" />
                    </header> 
                </div>  
                <div className="col-lg-8">
                    <div className="bg__login">

                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="auth__main d-flex align-items-center">
                        <Switch>
                            <Route 
                                exact
                                path="/auth/login"
                                component={ Login }
                            />

                            <Route 
                                exact
                                path="/auth/register"
                                component={ Register }
                            />

                            <Redirect to="/auth/login" />


                        </Switch>
                    </div>                    
                </div>

            </div>
        </div>
                
    )
}
