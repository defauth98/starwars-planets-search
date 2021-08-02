import React from 'react';
import PlanetProvider from './contexts/PlanetProvider';
import ListPlanetPage from './pages/ListPlanetsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <PlanetProvider>
      <ListPlanetPage />
    </PlanetProvider>
  );
}

export default App;
