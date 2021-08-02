import React, { useContext, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import planetContext from '../contexts/planetContext';

function TablePlanets() {
  const { planets, getPlanets, isLoading } = useContext(planetContext);

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

  return (
    <div>
      {planets.length && !isLoading ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Diameter</th>
              <th>Climate</th>
              <th>Gravity</th>
              <th>Terrain</th>
              <th>Surface Water</th>
              <th>Population</th>
              <th>Films</th>
              <th>Created</th>
              <th>Edited</th>
              <th>Url</th>
            </tr>
          </thead>

          <tbody>
            {
              planets.map((planet, index) => (
                <tr key={ index }>
                  {Object
                    .values(planet)
                    .map((item) => <td key={ item }>{item}</td>)}
                </tr>
              ))
            }
          </tbody>

        </Table>
      ) : null}
    </div>

  );
}

export default TablePlanets;
