import React from 'react';
import { StarBackground, TwinkleStars } from '../styled-components/starbackground';
import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <div id="main">
      <Navbar />
      <AppRoutes />

      {/* StarBackground shows best in layers with slightly different values
      values:
      time: String, seconds to complete rotation
      density: Number, number of stars in the layer
      blur: Number from .25 to 3.0 works best. blur radius of stars
      size: Number from 0.1 to 1.0 works best, pixel size of stars
      */}

      <StarBackground time='600s' density={350} blur={1} size={.125}></StarBackground>
      <StarBackground time='500s' density={200} blur={1} size={.25}></StarBackground>
      <StarBackground time='450s' density={100} blur={1.5} size={.5}></StarBackground>
      <StarBackground time='600s' density={350} blur={.5} size={.125}></StarBackground>

      {/* TwinkleStars does not take values from props, but can be modified in styled-components/starbackground.js */}
      <TwinkleStars></TwinkleStars>

    </div>
  );
};

export default App;
