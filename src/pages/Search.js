import { Footer, Header } from "../components"
import { useEffect } from "react"


export const Search = ({ title }) => {

  useEffect(() => {
    document.title = title
  })

  return (
    <>
      <Header />
      <main>
        <p className="text-7xl font-bold text-blue-200 text-center pt-40">
          API DOESN'T PROVIDE
        </p>
      </main>
      <Footer />
    </>)
}