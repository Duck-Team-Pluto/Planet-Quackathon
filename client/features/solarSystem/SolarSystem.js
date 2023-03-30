import { useDispatch, useSelector } from "react-redux"
import { SimplePlanetImage, TheSun } from "../../styled-components/PlanetDisplays"
import React, { useEffect } from "react"
import { fetchAllPlanetsAsync } from "./solarSystemSlice"
import { Link } from "react-router-dom"
import { PlanetOrbit } from "../../styled-components/Orbits"
import PlanetList from "../home/PlanetList"

const SolarSystem = () => {
  const planets = useSelector((state)=>state.planets)
  console.log(planets)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAllPlanetsAsync())
  },[dispatch]);


  return (
   <div className="static-home">
    <TheSun></TheSun>
      <div className="planets-list">
    {planets && planets.length ? <PlanetList planets={planets}/> : null}
  </div>

    </div>
  )
}

export default SolarSystem
