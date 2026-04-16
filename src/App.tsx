import './App.css'

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { RouterProvider } from 'react-router';
import { router } from './router/index'

function App() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-black dark:text-white">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
