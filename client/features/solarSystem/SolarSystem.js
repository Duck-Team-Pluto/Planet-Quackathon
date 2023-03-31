import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from "react"
import { fetchAllPlanetsAsync } from "./solarSystemSlice"
import PlanetList from "../solarSystem/PlanetList"
import { RowContainer } from "../../styled-components/Containers"

const SolarSystem = () => {
  const planets = useSelector((state)=>state.planets)
  console.log(planets)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAllPlanetsAsync())
  },[dispatch]);


  return (
   <RowContainer className="static-home" width="95vw">
    {planets && planets.length ? <PlanetList planets={planets}/> : null}
  </RowContainer>
  )
}

export default SolarSystem
