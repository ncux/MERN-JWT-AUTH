import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/auth/context";


export const Home = props => {

    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuthenticated) {
            navigate(`/login`);
        }
    }, [])

    return (
        <div className="grid-2">
          <h1>Home page!</h1>
        </div>
    );

};

