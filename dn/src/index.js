import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login/login';
import Registrar from './pages/registrar/registrar';
import Formm from './pages/dashboard/formm';
import Error404 from './pages/Error404/error'
import './index.css';
import Home from './pages/Home/home.js';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
              <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Login' element={<Login/>}/>
              <Route path='/Registrar' element={<Registrar/>}/>
              <Route path='/Dashboard' element={<Formm/>}/>
              <Route path='/404' element={<Error404/>}/>
              </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();