import React from 'react'

import './LoginForm.css'

const LoginForm = ({ email, password, handleChange, onSubmitForm }) => {
    return (
        <div className="container body">
            <div className="row centered-form">
                <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Login</h3>
                        </div>
                        <div className="panel-body">
                            <form>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="form-control input-sm"
                                                placeholder="Email"
                                                onChange={handleChange}
                                                email={email}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                className="form-control input-sm"
                                                placeholder="Password"
                                                onChange={handleChange}
                                                password={password}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <input
                                    type="submit"
                                    value="Login"
                                    className="btn btn-info btn-block"
                                    onClick={onSubmitForm}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
