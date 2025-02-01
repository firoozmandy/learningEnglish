import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { basePath } from './app/common/constants.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter
      basename={basePath}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
