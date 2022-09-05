import { useState, useEffect } from "react"
import { AquariumCard } from "../components/AquariumCard"


const Home = () => {
  const [parks, setParks] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}`)
    .then(response => response.json())
    .then(data => setParks(data))
    .catch(err => console.error(err))
  }, [])
  

  const allAquariums = parks.map((parks, index) => {
    return <AquariumCard key={index} parks={parks} index={index} /> // add back index
  })



  return (
    <div className="middle">
      <h1 className="home-h1">Aquariums around america</h1>
      <div className="parks">{allAquariums}</div>
    </div>
  )
}

export default Home