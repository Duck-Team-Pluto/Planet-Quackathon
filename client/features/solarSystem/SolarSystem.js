import { useDispatch, useSelector } from "react-redux"
import { SimplePlanetImage, TheSun } from "../../styled-components/PlanetDisplays"
import React, { useEffect } from "react"
import { fetchAllPlanetsAsync } from "./solarSystemSlice"
import { Link } from "react-router-dom"
import { PlanetOrbit } from "../../styled-components/Orbits"

const SolarSystem = () => {
  const planets = useSelector((state)=>state.planets)
  console.log(planets)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAllPlanetsAsync())
  },[dispatch]);


  return (
    <div className="galaxy">
      <TheSun>
      {planets && planets.length ? planets.map((planet)=> {

        return(
          <PlanetOrbit
           key={planet.id}
            xPos={30}
           yPos ={13}
           diameter={500}
            rotation={40*planet.id}
            timeOffset={planet.id*5.6}
            >
            <Link to={`/planets/${planet.id}`}><SimplePlanetImage radius={planet.radiusInMiles}>{planet.name}</SimplePlanetImage></Link></PlanetOrbit>
            )}) : null}
      </TheSun>




    </div>
  )
}

export default SolarSystem
