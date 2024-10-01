import { Link, useLocation, useParams } from "react-router-dom";
import { Header, Footer } from "../components/index"
import { useFetch } from "../assets/index";
import { useEffect, useState } from "react";




export const MovieDetail = ({ api }) => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`${api}${id}`)

  useEffect(() => {
    if (data !== null) {
      document.title = data.data.title
    } else {
      document.title = "Anime"
    }
  }, [data])

  function render() {
    if (loading) {
      return <div>LOADING</div>
    } else if (error || !data) {
      return <div>ERRORs</div>
    } else {
      const resource = {
        id: data.data.id,
        title: data.data.title,
        score: data.data.score,
        rank: data.data.rank,
        year: data.data.year,
        season: data.data.season,
        synp: data.data.synopsis,
        backg: data.data.background,
        src: data.data.images.jpg.large_image_url,
        alt: data.data.images.jpg.image_url,
        genre: data.data.genres.map(({ name }) => name),
        broadcast: data.data.broadcast,
        studios: data.data.studios.map(({ name }) => name),
      }
      return (
        <section>
          <div className="flex flex-col md:flex-row py-7 px-20 items-start max-md:items-center">
            <div className="w-1/3 max-md:w-3/5">
              <img src={resource.src} alt={resource.alt} className="rounded w-full" />
            </div>
            <div className="w-2/3 max-md:1/2 flex flex-col md:px-8 max-md:mt-4 text-blue-200">
              <h1 className="text-5xl font-bold mb-4">{resource.title}</h1>
              <p className="text-sm">{resource.synp}</p>
              <div className="flex flex-row">
                {resource.genre.map(genre => <Link to={`/animes/genre/${genre}`} className="text-sm p-3 py-2 border-2 opacity-70 rounded m-4 hover:opacity-40 hover:cursor-pointer">
                  {genre}
                </Link>)}
              </div>
              <span className="flex"><p className="font-bold">Score: </p> ⭐{resource.score}</span>
              <span className="flex"><p className="font-bold">Rank: </p> &nbsp; {resource.rank}</span>
              <span className="flex"><p className="font-bold">Year: </p> &nbsp;{resource.year + " " + resource.season}</span>
              <span className="flex"><p className="font-bold">Broadcast: </p> &nbsp;{resource.broadcast.string}</span>
              <span className="flex"><p className="font-bold">Studios: </p> &nbsp;{resource.studios}</span>
            </div>
          </div>
        </section>
      )
    }
  }

  return (
    <div>
      <Header />
      {render()}
      <Footer />
    </div>
  )
}