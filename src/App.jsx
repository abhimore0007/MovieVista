import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import MovieDetails from './components/MovieDetails'
import Navbar from './components/Navbar'
import Homepage from './Pages/Homepage'
import SearchMoviePage from './Pages/SearchMoviePage'
import TopRatedPage from './Pages/TopRatedPage'
import UpComingPage from './Pages/UpComingPage'
import ErrorBoundary from './components/ErrorBoundary'

function App() { 
  
  return (
    <>
      <Router>
        <ErrorBoundary>
        <Navbar />
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/TopRated" element={<TopRatedPage/>}/>
            <Route path="/Search" element={<SearchMoviePage/>}/>
            <Route path="/Movie/:id" element={<MovieDetails/>} />
            <Route path="/UpComig" element={<UpComingPage/>}/>
        </Routes>
        </ErrorBoundary>
      </Router>
    </>
  )
}


export default App
