import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home'
import Profile from './pages/Profile';
import Password from './pages/Password';
import Solicitudes from './pages/Solicitudes';
import Solicitudes_progress from './pages/Solicitudes_progress';
import Register from './pages/Register';
import Nueva_solicitud from './pages/Nueva_solicitud';
import Menu_practicas from './pages/Menu_practicas';
import List_solicitudes from './pages/List_solicitudes';
import List_practicas from './pages/List_practicas';
import List_materiales from './pages/List_materiales';
import Form_solicitud from './pages/Form_solicitud';
import Form_practica from './pages/Form_practica';
import Login from './pages/Login';
import Form_materiales from './pages/Form_materiales';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      {/* <ResponsiveAppBar></ResponsiveAppBar> */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inicio" element={<Home></Home>}></Route>
        <Route path="/perfil" element={<Profile></Profile>}></Route>
        <Route path="/password" element={<Password></Password>}></Route>
        <Route path="/solicitudes" element={<Solicitudes></Solicitudes>}></Route>
        <Route path="/progreso_solicitudes" element={<Solicitudes_progress></Solicitudes_progress>}></Route>
        <Route path="/registro" element={<Register></Register>}></Route>
        <Route path="/nueva_solicitud" element={<Nueva_solicitud></Nueva_solicitud>}></Route>
        <Route path="/menu_practicas" element={<Menu_practicas></Menu_practicas>}></Route>
        <Route path="/list_solicitudes" element={<List_solicitudes></List_solicitudes>}></Route>
        <Route path="/list_practicas" element={<List_practicas></List_practicas>}></Route>
        <Route path="/list_materiales" element={<List_materiales></List_materiales>}></Route>
        <Route path="/form_solicitud" element={<Form_solicitud></Form_solicitud>}></Route>
        <Route path="/form_practica" element={<Form_practica></Form_practica>}></Route>
        <Route path="/form_materiales" element={<Form_materiales></Form_materiales>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
