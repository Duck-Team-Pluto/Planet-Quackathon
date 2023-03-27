import React from 'react';
import StarBackground from '../styled-components/starbackground';
import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <div id="main">
      <Navbar />
      <AppRoutes />
      <StarBackground></StarBackground>
    </div>
  );
};

export default App;
