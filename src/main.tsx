import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Router, RouterContextProvider, RouterProvider, Routes } from 'react-router-dom'
import Basket from './components/Basket/Basket.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/basket" element={<Basket/>}/>
      </Routes>
      </BrowserRouter>
    </Provider>
  // </StrictMode>
)
