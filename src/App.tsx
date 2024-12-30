import Footer from './app/(home)/components/Footer'
import TopNavbar from './app/(home)/components/TopNavbar'
import AppProviders from './components/wrappers/AppProviders'
import AppRouter from './routes/router'

import '@/assets/scss/style.scss'

function App() {
  return (
    <>
      <AppProviders>
        <TopNavbar/>
        <AppRouter />
        <Footer/>
      </AppProviders>
    </>
  )
}

export default App
