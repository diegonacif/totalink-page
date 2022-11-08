import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { FAQ } from './pages/FAQ/FAQ';
import { FaqToner } from './pages/FAQ/FaqToner/FaqToner';
import { RequestQuote } from './pages/RequestQuote/RequestQuote';
import { WhitePage } from './pages/WhitePage';
import { HowManyPages } from './articles/HowManyPages/HowManyPages';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="faq" element={<WhitePage />}>
      <Route index element={<FAQ />} />
      <Route path="toner" element={<FaqToner />} />
    </Route>
    <Route path="quote" element={<RequestQuote />} />
    <Route path="article" element={<WhitePage />}>
      <Route index element={<WhitePage />} />
      <Route path="how-many-pages" element={<HowManyPages />} />
    </Route>
  </Routes>
    
  </BrowserRouter>
)
