import React, { useEffect, useReducer, createContext } from 'react';
import axios from 'axios';
import { Reducer } from "./reducer";
import { SET_LOADING, SET_USER_DATA } from "../types";
import { config } from "../../config/axios";

const { httpHeaders, AUTH_URL, authAxios } = config;

const InitialState = {
    loading: false,
    userData: {},
    isAuthenticated: false
};

export const AuthContext = createContext(InitialState);

export const AuthState = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, InitialState);

    const setLoading = () => dispatch({ type: SET_LOADING });

    const checkAuthStatus = async () => {
        // checks is there's a token - returns true or false as data
        const { data } = await authAxios.post('auth', null, httpHeaders);
        if(data) {
            // checks if the token is valid and returns the user's data
            const { data } = await authAxios.get('', httpHeaders);
            return dispatch({ type: SET_USER_DATA, payload: data });
        }
    };

    const login = async userCredentials => {
        setLoading();
        const { data } = await axios.post(`${AUTH_URL}login`, JSON.stringify(userCredentials), httpHeaders);
        const { token, user } = data;
        localStorage.setItem('auth_token', token);
        return dispatch({ type: SET_USER_DATA, payload: user });
    };

    useEffect(() => {
        checkAuthStatus();
    }, []);

    const setUserData = (data) => dispatch({ type: SET_USER_DATA, payload: data });

    return (
        <AuthContext.Provider value={{
            loading: state.loading,
            isAuthenticated: state.isAuthenticated,
            userData: state.userData,
            setLoading,
            login,
            checkAuthStatus,
            setUserData
        }}>
            { children }
        </AuthContext.Provider>
    )

};

