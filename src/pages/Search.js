import { useParams } from "react-router-dom";
import { useTitle } from "../assets/useTitle";
import { MovieList } from "./MovieList";


export const Search = ({ api }) => {
  const { name } = useParams();

  useTitle(name)


  return (
    <>
      <main className="pt-10">
        <h1 className="text-3xl font-semibold px-20 text-white" >Search: {name}</h1>
        <MovieList name={name} api={api + name + "&order_by=rank"} />
      </main>
    </>)
}