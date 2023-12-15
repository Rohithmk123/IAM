import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

// Import your EnterococcusPage component here
import EnterococcusPage from './Microbes_pages/EnterococcusPage.jsx'; // Adjust the path accordingly
import Acinetobacter_baumannii from './Microbes_pages/Acinetobacter_baumannii.jsx';
import Staphylococcus_aureus from './Microbes_pages/Staphylococcus_aureus.jsx';
import Klebsiella_pneumoniae from './Microbes_pages/Klebsiella_pneumoniae.jsx';
import Pseudomonas_aeruginosa from './Microbes_pages/Pseudomonas_aeruginosa.jsx';
import Enterobacter_spp from './Microbes_pages/Enterobacter_spp.jsx';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Enterococcus Page" element={<EnterococcusPage />} />
      <Route path="Acinetobacter_baumannii" element={<Acinetobacter_baumannii />} />
      <Route path="Staphylococcus_aureus" element={<Staphylococcus_aureus />} />
      <Route path="Klebsiella_pneumoniae" element={<Klebsiella_pneumoniae />} />
      <Route path=" Pseudomonas_aeruginosa" element={< Pseudomonas_aeruginosa />} />
      <Route path="Enterobacter_spp" element={<Enterobacter_spp />} />
    </Routes>
  </BrowserRouter>
);
