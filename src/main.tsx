import React from 'react';
import ReactDOM from 'react-dom/client';
import GitProfile from './components/gitprofile.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GitProfile config={CONFIG} />} />
        {/*<Route*/}
        {/*  path="/projects/wagglewaggle"*/}
        {/*  element={<WaggleWaggle config={CONFIG} />}*/}
        {/*/>*/}
        {/*<GitProfile config={CONFIG} />*/}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
