import React, { useEffect, useRef, useState } from 'react'
import { Card } from '../components/Card'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from "../assets/index"
import { useTitle } from "../assets/useTitle"
import { DropdownFilter } from '../components/DropdownFilter'

const orderByOptions = [
  {
    value: "popularity",
    text: "Popularity"
  },
  {
    value: "rank",
    text: "Rank"
  }, {
    value: "start_date",
    text: "Start Date"
  }, {
    value: "end_date",
    text: "End Date"
  }
]

const ratingOptions = [
  {
    value: "",
    text: "Any"
  }, {
    value: "g",
    text: "g"
  }, {
    value: "pg",
    text: "PG"
  }, {
    value: "pg13",
    text: "PG-13"
  }, {
    value: "r17",
    text: "R-17+"
  }
]

const typeOptions = [
  {
    value: "",
    text: "Any"
  }, {
    value: "tv",
    text: "TV"
  }, {
    value: "movie",
    text: "Movie"
  }, {
    value: "ova",
    text: "OVA"
  }, {
    value: "special",
    text: "Special"
  }
]

const genres = [
  {
    "mal_id": 1,
    "name": "Action",
    "url": "https://myanimelist.net/anime/genre/1/Action",
    "count": 5295
  },
  {
    "mal_id": 2,
    "name": "Adventure",
    "url": "https://myanimelist.net/anime/genre/2/Adventure",
    "count": 4205
  },
  {
    "mal_id": 4,
    "name": "Comedy",
    "url": "https://myanimelist.net/anime/genre/4/Comedy",
    "count": 7484
  },
  {
    "mal_id": 8,
    "name": "Drama",
    "url": "https://myanimelist.net/anime/genre/8/Drama",
    "count": 2989
  },
  {
    "mal_id": 10,
    "name": "Fantasy",
    "url": "https://myanimelist.net/anime/genre/10/Fantasy",
    "count": 5778
  },
  {
    "mal_id": 14,
    "name": "Horror",
    "url": "https://myanimelist.net/anime/genre/14/Horror",
    "count": 567
  },
  {
    "mal_id": 7,
    "name": "Mystery",
    "url": "https://myanimelist.net/anime/genre/7/Mystery",
    "count": 945
  },
  {
    "mal_id": 37,
    "name": "Supernatural",
    "url": "https://myanimelist.net/anime/genre/37/Supernatural",
    "count": 1478
  },
  {
    "mal_id": 41,
    "name": "Suspense",
    "url": "https://myanimelist.net/anime/genre/41/Suspense",
    "count": 434
  },
  {
    "mal_id": 6,
    "name": "Mythology",
    "url": "https://myanimelist.net/anime/genre/6/Mythology",
    "count": 645
  },
]

export const MovieList = ({ api, title }) => {
  const { genre } = useParams();
  const [genreId, setGenreId] = useState(api + ((genre !== undefined) ? genre : ""))
  const [url, setUrl] = useState(genreId)
  const [orderBy, setOrderBy] = useState("popularity")
  const [rating, setRating] = useState("")
  const [type, setType] = useState("")
  const { data, loading, error } = useFetch(url)

  useEffect(() => {
    setGenreId(api + ((genre !== undefined) ? genre : ""))
    console.log(genre)
  }, [api])

  useEffect(() => {
    //
    setUrl(url => api + ((genre !== undefined) ? genre : ""))
    setUrl(url => url + `&order_by=${orderBy}`)
    setUrl(url => url + (rating ? `&rating=${rating}` : ""))
    setUrl(url => url + (type ? `&type=${type}` : ""))
  }, [orderBy, rating, type, genreId, api])

  useTitle(title)




  function render() {
    if (loading || data === null) {
      return <div className='text-white'>LOADING</div>
    } else if (error || !data || !data.data) {
      return <div className='text-white'>ERROR. Only 60 fetch per minutes :(. Try changing filters</div>
    } else {
      if (data.data.length === 0) {
        return <h1 className='text-5xl text-white'>No Results</h1>
      }
      const new_data = data.data.filter((anime, index) => data.data.findIndex(item => item.mal_id === anime.mal_id) === index)
      return new_data.map((anime) => {
        const resource = {
          id: anime.mal_id,
          name: anime.title,
          desc: anime.synopsis,
          src: anime.images.jpg.image_url,
          alt: "front cover"
        }
        return <Card key={resource.id} resource={resource} raw={anime} />
      })
    }
  }


  return (
    <main>
      <div className='flex flex-col mx-20 p-5 mt-4 border rounded-md bg-blue-900'>
        <section className='text-white flex flex-row flex-wrap'>
          <DropdownFilter title={"Sort"} options={orderByOptions} optionVal={orderBy} setOptionVal={setOrderBy} />
          <DropdownFilter title={"Rating"} options={ratingOptions} optionVal={rating} setOptionVal={setRating} />
          <DropdownFilter title={"Type"} options={typeOptions} optionVal={type} setOptionVal={setType} />
        </section>
        <div className='flex flex-row flex-wrap mt-2'>
          {genres.map(({ mal_id, name }) => (
            (genreId === mal_id) ? <Link onClick={() => setGenreId(mal_id)} className={`mx-2 px-2 py-1 border border-white text-white rounded bg-blue-500`} key={mal_id} to={`/animes/genre/${mal_id}`}>
              {name}
            </Link> :
              <Link onClick={() => setGenreId(mal_id)} className={`mx-2 px-2 py-1 border border-white text-white rounded`} key={mal_id} to={`/animes/genre/${mal_id}`}>
                {name}
              </Link>
          ))}
        </div>
      </div>

      <section className="pt-14 pl-10">
        <div className='flex justify-center flex-wrap'>
          {
            render()
          }
        </div>
      </section>
    </main >
  )
}
