import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import { RoutesArray } from "./routes/routes-array";
import { Navbar } from "./components/layout/navbar/navbar";
import { AuthState } from "./context/auth/context";
import { AuthContext } from "./context/auth/context";

function App() {

  // const [userData, setUserData] = useState({ token: '', user: {} });
  const { userData, setUserData, checkAuthStatus } = useContext(AuthContext);



  useEffect(() => {
      checkAuthStatus();
  }, []);

  return (
    <AuthState>
        <BrowserRouter>
            <div className="container">
                <Navbar />
                <RoutesArray />
            </div>
        </BrowserRouter>
    </AuthState>
  );
}

export default App;
