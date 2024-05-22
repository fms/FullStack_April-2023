import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; // Assuming you have some global styles defined here
import 'bootstrap/dist/css/bootstrap.min.css';
import BreedDetail from './components/BreedDetail/BreedDetail';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/breed/:breedName" element={<BreedDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
