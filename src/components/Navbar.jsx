import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const[query,setQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault();
    if(query){
      navigate(`/search?query=${query}`)
    }
  }

  return (
    <nav>
      <h1>Movie Search App</h1>
      <form action="" onSubmit={handleSearch}>
        <input type="text" value={query} 
         onChange={(e) => setQuery(e.target.value)}
         placeholder="Search for the movie"
        />
        <button type="submit">Search</button>
      </form>
      <div className="links">
        <a href="/">Popular</a>
        <a href="/TopRated">Top rated</a>
        <a href="/UpComig">Upcoming</a>
      </div>
    </nav>
  )
}

export default Navbar