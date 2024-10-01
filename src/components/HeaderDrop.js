import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderDrop = ({ setSearch, search }) => {
  return (
    <section className='md:hidden flex flex-col bg-blue-800 items-center'>
      <div>
        <input onChange={setSearch} placeholder='Search' className='mt-2 py-1 text-blue-200 pb-1 px-1.5 rounded bg-blue-950' />
        <button to={`/search/${search}`} onClick={() => setSearch("")} className='py-1 pb-1 px-1.5 rounded bg-blue-950'>🔍</button>
      </div>
      <NavLink to={'/'} className='border-b-2 w-full text-center py-2 hover:opacity-40'>Home</NavLink>
      <NavLink to={'/animes/popular'} className='border-b-2 text-center w-full py-2 hover:opacity-40'>Popular</NavLink>
      <NavLink to={'/animes/top'} className='border-b-2 w-full py-2 text-center hover:opacity-40'>Top Rated</NavLink>
      <NavLink to={'/animes/upcoming'} className='border-b-2 w-full text-center py-2 hover:opacity-40'>Upcoming</NavLink>
    </section>
  )
}
