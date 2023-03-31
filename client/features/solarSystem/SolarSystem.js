import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from "react"
import { fetchAllPlanetsAsync } from "./solarSystemSlice"
import PlanetList from "../solarSystem/PlanetList"

const SolarSystem = () => {
  const planets = useSelector((state)=>state.planets)
  console.log(planets)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAllPlanetsAsync())
  },[dispatch]);


  return (
   <div className="static-home">

      <div className="planets-list">
    {planets && planets.length ? <PlanetList planets={planets}/> : null}
  </div>

    </div>
  )
}

export default SolarSystem
