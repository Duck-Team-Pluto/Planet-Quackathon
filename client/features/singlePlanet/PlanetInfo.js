import React from "react"

const PlanetInfo = (props) => {
  const planet = props.planet

  console.log(planet)
  return (
    <div className="single-planet">
        <h1>{planet.name}</h1>
        <h2>Radius (mi): {planet.radiusInMiles}</h2>
        <h2>Distance from the Sun (mi): {planet.distanceInMiles}</h2>
        <h2>Core Type: {planet.core}</h2>
        <h2>Fun Facts!!!</h2>
        <div className="fun-facts">
          <h3>{planet.factOne}</h3>
          <h3>{planet.factTwo}</h3>
          <h3>{planet.factThree}</h3>
        </div>
        </div>

  )
}


export default PlanetInfo
