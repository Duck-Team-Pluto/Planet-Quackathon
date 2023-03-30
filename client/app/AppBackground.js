
import React from 'react';
import { StarBackground } from '../styled-components/starbackground';

const AppBackground = () => {
  return (
    <div id="app-background">

      {/* StarBackground shows best in layers with slightly different values
      values:
      time: String, seconds to complete rotation
      density: Number, number of stars in the layer
      blur: Number from .25 to 3.0 works best. blur radius of stars
      size: Number from 0.1 to 1.0 works best, pixel size of stars
      */}

<StarBackground time='850s' density={300} blur={.25} size={.0675}></StarBackground>
      <StarBackground time='550s' density={150} blur={.35} size={.1}></StarBackground>
      <StarBackground time='950s' density={250} blur={.35} size={.07125}></StarBackground>
      <StarBackground time='1250s' density={200} blur={.35} size={.0675}></StarBackground>
      <StarBackground time='1550s' density={200} blur={.25} size={.0175}></StarBackground>
      <StarBackground time='1050s' density={200} blur={.25} size={.0175}></StarBackground>
      <StarBackground time='850s' density={200} blur={.15} size={.0175}></StarBackground>
      <StarBackground time='650s' density={200} blur={.25} size={.0175}></StarBackground>
      <StarBackground time='1250s' density={200} blur={.25} size={.0175}></StarBackground>
      <StarBackground time='2250s' density={200} blur={.25} size={.0175}></StarBackground>
      <StarBackground time='1750s' density={200} blur={.25} size={.0175}></StarBackground>

    </div>
  );
};

export default AppBackground;
