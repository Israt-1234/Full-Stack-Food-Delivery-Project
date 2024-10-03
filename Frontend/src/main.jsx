import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom' 
import StoreContextprovider from './context/StoreContext.jsx'
ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextprovider>
  <App />
  </StoreContextprovider>
  </BrowserRouter>
)
