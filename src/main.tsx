import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import LoginPage from './pages/LoginPage/LoginPage'
import NotFound from './pages/NotFoundPage/NotFound'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import './styles/global/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
  </StrictMode>
)
