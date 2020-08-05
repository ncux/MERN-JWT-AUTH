import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../../context/auth/context";
import { Loading } from "../../layout/loading/loading";

export const Login = props => {

    const { login, loading, isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const { email, password } = user;

    const onFormInput = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        if(!email || !password) return;
        await login(user);
        navigate(`/home`);
    };

    useEffect(() => {
        if(isAuthenticated) {
            navigate(`/home`);
        }
    }, [isAuthenticated]);

    if(loading) return (<Loading />);

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

