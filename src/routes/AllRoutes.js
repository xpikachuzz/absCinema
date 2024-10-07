import { Routes, Route } from "react-router-dom"

import { MovieList, MovieDetail, Search, PageNotFound } from "../pages"


import React from 'react'
import { Footer, Header } from "../components"

export const AllRoutes = () => {
  return (
    <div className="h-full">
      <Header />
      <Routes>
        <Route path="" element={<MovieList title="Cinemate" api="https://api.jikan.moe/v4/anime?sfw&status=airing" />} />
        <Route path="/anime/:id" element={<MovieDetail api="https://api.jikan.moe/v4/anime/" />} />
        <Route path="/animes/popular" element={<MovieList title="Cinemate - Popular" api="https://api.jikan.moe/v4/anime?sort=desc&order_by=score&status=airing&sfw" />} />
        <Route path="/animes/top" element={<MovieList title="Cinemate - Top" api="https://api.jikan.moe/v4/anime?sort=desc&sfw&order_by=score" />} />
        <Route path="/animes/upcoming" element={<MovieList title="Cinemate - Upcoming" api="https://api.jikan.moe/v4/anime?status=upcoming&sfw" />} />
        <Route path="/animes/genre/:genre" element={<MovieList title="Cinemate - Genre" api="https://api.jikan.moe/v4/anime?sfw&genres=" />} />
        <Route path="/search/:name" element={<Search title="Cinemate - Search" api="https://api.jikan.moe/v4/anime?sfw&q=" />} />
        <Route path="*" element={<PageNotFound title="Page Not Found" />} />
      </Routes>
      <Footer />
    </div>
  )
}