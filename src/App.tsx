import { Suspense, useState } from "react"
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import type { ICard } from "./type"
import DevCard from "./DevCard/DevCard"
import Footer from "./components/Footer"

const cardsFetch = async (): Promise<ICard[]> => {
  const res = await fetch('card.json')
  const data = await res.json()
  return data;
}

function App() {
  const [cardPromise] = useState(() => cardsFetch())
  const [isSelected, setIsSelected] = useState<ICard[]>([])

  return (
    <>
      <Navbar />
      <Banner />
      <Suspense>
        <DevCard cardPromise={cardPromise} isSelected={isSelected} setIsSelected={setIsSelected} />
        <Footer />
      </Suspense>

    </>
  )
}

export default App
