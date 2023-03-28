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
        <PlanetOrbit xPos={35} yPos={20} diameter={400}>
          <SimplePlanetImage radius={3000}></SimplePlanetImage>
        </PlanetOrbit>
        <PlanetOrbit xPos={27} yPos={5} diameter={600}></PlanetOrbit>
      </TheSun>


    </div>

  )


}

export default SolarSystemOrbit
