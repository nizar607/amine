import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './sections/NavigationBar'
import Movies from './pages/Movies'
import { Routes, Route } from 'react-router-dom'
import WishList from './pages/WishList'
import NotFound from './pages/NotFound'
import MovieDetails from './pages/MovieDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/wish-list" element={<WishList />} />
        <Route path="/movie-details/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
