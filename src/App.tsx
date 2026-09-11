import { Suspense } from "react"
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import CardSection from "./DevCard/CardSection"
import type { ICard } from "./type"
import DevCard from "./DevCard/DevCard"
import Footer from "./components/Footer"

  const cardsFetch = async():Promise<ICard[]> =>{
    const res = await fetch('card.json')
    const data = await res.json()
    return data;
  }

function App() {
  const cardPromise = cardsFetch() 

  return (
    <>
     <Navbar/>
     <Banner/>
     <Suspense>
     <DevCard cardPromise = {cardPromise}/>
      <Footer/>
     </Suspense>
     
    </>
  )
}

export default App
