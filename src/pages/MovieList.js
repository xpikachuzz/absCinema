import React from 'react'
import { Card } from '../components/Card'
import { useParams } from 'react-router-dom'
import { useFetch } from "../assets/index"
import { useTitle } from "../assets/useTitle"

export const MovieList = ({ api, title }) => {
  const { genre } = useParams();
  const { data, loading, error } = useFetch(api + ((genre !== undefined) ? "&" + genre : ""))

  console.log(title)
  useTitle(title)


  function render() {
    if (loading) {
      return <div>LOADING</div>
    } else if (error || !data) {
      return <div>ERRORs</div>
    } else {
      return data.data.map((anime) => {
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
      <section className="pt-14 pl-10">
        <div className='flex justify-center flex-wrap'>
          {
            render()
          }
        </div>
      </section>
    </main>
  )
}
