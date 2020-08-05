import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import { RoutesArray } from "./routes/routes-array";
import { Navbar } from "./components/layout/navbar/navbar";
import { AuthState } from "./context/auth/context";

function App() {

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
