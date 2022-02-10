import { useCallback, useState } from "react"
import { Header } from "./components"
import Menu from "./pages/Main"

function App() {
  const [inputVolume, setInputVolume] = useState<number | null>(null)

  const searchAlbum = useCallback((value: number) => {
    setInputVolume(value)
  }, [])

  return (
    <>
      <Header searchAlbum={searchAlbum} />
      <Menu filterAlbum={inputVolume} />
    </>
  )
}

export default App
