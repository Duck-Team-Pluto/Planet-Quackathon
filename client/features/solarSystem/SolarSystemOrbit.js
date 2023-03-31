import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { PlanetOrbit } from "../../styled-components/Orbits";
import { SimplePlanetImage, TheSun } from "../../styled-components/PlanetDisplays";
import { fetchAllPlanetsAsync } from "./solarSystemSlice";

const SolarSystemOrbit = () => {

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
          d1={75}
          d2={75}
          rotation={40*planet.id}
          timeOffset={planet.id*5.6}
          >
          <Link to={`/planets/${planet.id}`}><SimplePlanetImage margin={-37.5} radius={planet.radiusInMiles}>{planet.name}</SimplePlanetImage></Link></PlanetOrbit>
          )}) : null}
    </TheSun>


    </div>

  )


}

export default SolarSystemOrbit
