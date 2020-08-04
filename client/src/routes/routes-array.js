import React from "react";
import { useRoutes } from "react-router-dom";
import { Home } from "../components/home/home";
import { Login } from "../components/auth/login/login";
import { Registration } from "../components/auth/registration/registration";
import { About } from "../components/about/about";

export const RoutesArray = () => {

    return useRoutes([

        {
            path: 'home',
            element: <Home />
        },
        {
            path: '',
            redirectTo: 'home',
            element: <Home />
        },
        {
            path: 'login',
            element: <Login />
        },
        {
            path: 'register',
            element: <Registration />
        },
        {
            path: 'about',
            element: <About />
        },

    ]);

};
