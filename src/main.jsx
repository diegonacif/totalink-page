import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { FAQ } from './pages/FAQ/FAQ';
import { RequestQuote } from './pages/RequestQuote/RequestQuote';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/quote" element={<RequestQuote />} />
  </Routes>
    
  </BrowserRouter>
)
