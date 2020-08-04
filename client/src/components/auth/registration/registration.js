import React, { useState, useContext, useEffect } from 'react';

export const Registration = props => {

    const [user, setUser] = useState({
        displayName: '',
        email: '',
        password: '',
        passwordCheck: ''
    });

    const { displayName, email, password, passwordCheck } = user;

    const onFormInput = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
      e.preventDefault();
      if(!email || !password || !passwordCheck || !displayName) return;
      console.log(user);
    };

    return (
        <form onSubmit={ onSubmit }>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" value={ email } name="email" onChange={ onFormInput } className="form-control" id="email" />
            </div>
            <div className="form-group">
                <label htmlFor="displayName">Display name</label>
                <input type="password" value={ displayName } name="displayName" onChange={ onFormInput } className="form-control" id="displayName" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" value={ password } name="password" onChange={ onFormInput } className="form-control" id="password" />
            </div>
            <div className="form-group">
                <label htmlFor="passwordCheck">Confirm password</label>
                <input type="password" value={ passwordCheck } name="passwordCheck" onChange={ onFormInput } className="form-control" id="passwordCheck" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );

};

