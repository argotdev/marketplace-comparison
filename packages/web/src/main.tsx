import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdapterPage } from './pages/AdapterPage.tsx';
import { KitPage } from './pages/KitPage.tsx';
import { OrderPage } from './pages/OrderPage.tsx';
import { Home } from './pages/Home.tsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adapter/:platform" element={<AdapterPage />} />
        <Route path="/kit/:platform" element={<KitPage />} />
        <Route path="/order/:id" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
