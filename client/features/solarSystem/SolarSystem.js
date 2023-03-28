import { useDispatch, useSelector } from "react-redux"
import { SimplePlanetImage, TheSun } from "../../styled-components/planetdisplays"
import React, { useEffect } from "react"
import { fetchAllPlanetsAsync } from "./solarSystemSlice"
import { Link } from "react-router-dom"

const SolarSystem = () => {
  const planets = useSelector((state)=>state.planets)
  console.log(planets)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAllPlanetsAsync())
  },[dispatch]);


  return (
    <div className="solar-system">
      <TheSun></TheSun>
      {planets && planets.length ? planets.map((planet)=> <Link to={`/planets/${planet.id}`} key={planet.id}><SimplePlanetImage radius={planet.radiusInMiles}>{planet.name}</SimplePlanetImage></Link>) : null}
    </div>
  )
}

export default SolarSystem
