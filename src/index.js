import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { RouterProvider, createBrowserRouter,BrowserRouter,Route,Routes } from 'react-router-dom';
import Entrar from './pages/entrada';
import Login from './pages/login';
import Portaria from './pages/portaria';
import Adm from './pages/adm';
import Saida from './pages/saida';
import Gerenciar from './pages/gerenciar_usuarios';
import Leitor from './Leitor';
import { PrivateRoute } from './privateRoute';
import Cadastrar from './pages/cadastro';
import Registro from './pages/registro';

const router = createBrowserRouter([
  {
    path: "/login",
    element:<Login/> 
  },
  {
    path: "/",
    element:<Login/> 
  },
  {
    path:"entrada",
    element: <Entrar />
  },
  {
    path:"saida",
    element: <PrivateRoute><Saida/></PrivateRoute>
  },
  {
    path:"adm",
    element:<PrivateRoute><Adm/></PrivateRoute>
  },
  {
    path:"portaria",
    element: <PrivateRoute><Portaria/></PrivateRoute>
  },
  {
    path:"gerenciar",
    element: <Gerenciar/>
  },
  {
    path: "leitor",
    element: <Leitor/>
  },
  {
    path:"cadastrar",
    element: <PrivateRoute><Cadastrar/></PrivateRoute>
  },
  {
    path:"registro",
    element:  <Registro/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
    
  </React.StrictMode>
);
