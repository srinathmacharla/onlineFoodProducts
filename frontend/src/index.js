import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import NewProducts from './pages/NewProducts';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {store} from './redux/index.js';
import { Provider } from 'react-redux';
import Cart from './pages/Cart.js';
import Success from './pages/Success.js';
import Cancel from './pages/Cancel.js';
import CustomerAdress from './pages/CustomerAdress.js';


const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route index element={<Home/>}/>
      <Route path='Menu/:filterby' element={<Menu/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='NewProducts' element={<NewProducts/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='Signup' element={<Signup/>}/>
      <Route path='customer' element={<CustomerAdress/>}/>
      <Route path='Cart' element={<Cart/>}/>
      <Route path='Success' element={<Success/>}/>
      <Route path='Cancel' element={<Cancel/>}/>

      </Route>


  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);


reportWebVitals();
