import { useState, useEffect } from "react"
import { AquariumCard } from "../components/AquariumCard"


const Home = () => {
  const [parks, setParks] = useState([])

  useEffect(() => {
    fetch('http://localhost:4001')
    .then(response => response.json())
    .then(data => setParks(data))
    .catch(err => console.error(err))
  }, [])
  

  const allAquariums = parks.map((parks, index) => {
    return <AquariumCard key={index} parks={parks} index={index} /> // add back index
  })



  return (
    <div className="container">
      <h1 className="home-h1">Aquariums Around America</h1>
      <div className="parks">{allAquariums}</div>
    </div>
  )
}

export default Home