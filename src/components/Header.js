import logo from '../images/logo.png'
import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { HeaderDrop } from "./HeaderDrop.js"

export const Header = () => {
  const [hidden, setHidden] = useState(false)
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || true)
  const [search, setSearch] = useState("")


  function inputHandler(e) {
    setSearch(e.target.value)
  }

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
  })

  return (
    <div className=''>
      <header className='w-full p-4 text-s bg-blue-900 text-stone-400 h-13'>
        <div className='flex justify-between items-center'>
          <Link to={"/"} className='flex flex-row  font-extralight'>
            <img src={logo} alt='logo' className='w-14 ' />
            <span className="text-2xl font-semibold">Cinemate</span>
          </Link>
          <nav className='items-center max-md:hidden font-semibold'>
            <NavLink to={'/'} className='hover:text-blue-400 hover:cursor-pointer hover:text-black py-1.5  px-1.5 rounded-sm' end>Home</NavLink>
            <NavLink to={'/animes/popular'} className='hover:text-blue-400 hover:cursor-pointer hover:text-black py-1.5  px-1.5 rounded-sm'>Popular</NavLink>
            <NavLink to={'/animes/top'} className='hover:text-blue-400 hover:cursor-pointer hover:text-black py-1.5  px-1.5 rounded-sm'>Top Rated</NavLink>
            <NavLink to={'/animes/upcoming'} className='hover:text-blue-400 hover:cursor-pointer hover:text-black py-1.5  px-1.5 rounded-sm'>Upcoming</NavLink>
          </nav>
          <div className='bg-blue-900 rounded'>
            <button onClick={() => setDarkMode(!darkMode)} className='ml-1 px-2 py-1 rounded bg-blue-700 dark:bg-blue-950 mr-1'>🔆</button>
            <input onChange={inputHandler} placeholder='Search' className='max-md:hidden py-1 pb-1 px-1.5 rounded bg-blue-950' />
            <Link to={`/search/${search}`} onClick={() => setSearch("search")} className='max-md:hidden py-1.5 ml-1 px-1.5 rounded bg-blue-950'>🔍</Link>
            <button onClick={() => setHidden(!hidden)} className='md:hidden ml-1 px-2 py-1 rounded bg-blue-950'>☰</button>
          </div>
        </div>
      </header>
      {hidden && <HeaderDrop setSearch={setSearch} search={search} />}
    </div>
  )
}