
import React from 'react';
import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';
import AppBackground from './AppBackground';


const App = () => {
  return (
    <div id="main">
      <Navbar />
      <AppRoutes />
      <AppBackground/ >
    </div>
  );
};

export default App;
