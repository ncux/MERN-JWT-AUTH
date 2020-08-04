import React, { useState, useContext, useEffect } from 'react';

export const Login = props => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const { email, password } = user;

    const onFormInput = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        if(!email || !password) return;
        console.log(user);
    };

    return (
        <form onSubmit={ onSubmit }>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" value={ email } name="email" onChange={ onFormInput } className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" value={ password } name="password" onChange={ onFormInput } className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

