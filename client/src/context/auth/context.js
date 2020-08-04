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
        const { data } = await authAxios.post('/auth', null, httpHeaders);
        console.log(data);
    };

    const setUserData = (data) => dispatch({ type: SET_USER_DATA, payload: data });

    return (
        <AuthContext.Provider value={{
            loading: state.loading,
            isAuthenticated: state.isAuthenticated,
            userData: state.userData,
            setLoading,
            checkAuthStatus,
            setUserData
        }}>
            { children }
        </AuthContext.Provider>
    )

};

