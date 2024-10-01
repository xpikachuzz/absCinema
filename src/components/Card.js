import { Link } from "react-router-dom"

export const Card = ({ raw, resource: { src, alt, name, desc, id } }) => {
  return <Link key={id} to={`/anime/${id}`} className="pb-5 mb-7 mr-10 w-72 max-md:w-3/5 rounded border-2 border-blue-800 border-1 border-gray-700 bg-blue-900 hover:border-blue-900 hover:cursor-pointer hover:bg-blue-950">
    <img src={src} alt={alt} className="rounded w-full" />
    <p className="text-xl px-1 font-semibold text-gray-300 text-center mt-1 text-wrap">{name}</p>
    <p className="text-md px-2 text-center mt-3 text-gray-300 opacity-50 text-wrap max-h-24 overflow-hidden">{desc}</p>
  </Link>
}