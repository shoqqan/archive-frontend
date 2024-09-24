import React from 'react';
import {createRoot} from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import "@/shared/lib/i18n";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
