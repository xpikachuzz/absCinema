import { useEffect } from "react"

export const PageNotFound = ({ title }) => {

  useEffect(() => {
    document.title = title
  })

  return <main>
    <h1 className="text-5xl font-bold text-blue-200 text-center pt-20">
      Page Not Found
    </h1>
  </main>
}