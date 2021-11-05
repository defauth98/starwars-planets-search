import React, { useContext, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import planetContext from '../contexts/planetContext';

import './table.css';

function TablePlanets() {
  const { planets, getPlanets, isLoading } = useContext(planetContext);

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

  return (
    <div>
      <h2>Planetas</h2>

      {planets.length && !isLoading ? (
        <Table className="mt-4" size="sm" bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rotation</th>
              <th>Orbital</th>
              <th>Diameter</th>
              <th>Climate</th>
              <th>Gravity</th>
              <th>Terrain</th>
              <th>Water</th>
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
                  {
                    Object
                      .values(planet)
                      .map(
                        (item) => (
                          <td
                            key={ item }
                          >
                            {
                              typeof item === 'string' || typeof item === 'number'
                                ? item : item[0]
                            }
                          </td>),
                      )
                  }
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
