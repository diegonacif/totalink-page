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
import { AboutUs } from './pages/AboutUs/AboutUs';
import { ContactUs } from './pages/ContactUs/ContactUs';
import { WhitePage } from './pages/WhitePage';
import { HowManyPages } from './articles/HowManyPages';
import { StainPages } from './articles/StainPages';
import { FlawPages } from './articles/FlawPages';
import { EnergyIssues } from './articles/EnergyIssues';
import { UsefullFiles } from './articles/UsefullFiles';
import { Resets } from './articles/Resets';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="faq" element={<WhitePage />}>
          <Route index element={<FAQ />} />
          <Route path="toner" element={<FaqToner />} />
        </Route>
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="article" element={<WhitePage />}>
          <Route index element={<WhitePage />} />
          <Route path="how-many-pages" element={<HowManyPages />} />
          <Route path="stain-pages" element={<StainPages />} />
          <Route path="flaw-pages" element={<FlawPages />} />
          <Route path="energy-issues" element={<EnergyIssues />} />
          <Route path="usefull-files" element={<UsefullFiles />} />
          <Route path="resets" element={<Resets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
