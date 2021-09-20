/* eslint-disable react/jsx-max-depth */
import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import planetContext from '../contexts/planetContext';

function NumericFilters() {
  const { setFilters, filters, handleNumericFilters } = useContext(planetContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  function handleAddFilter(ev) {
    ev.preventDefault();

    const newFilter = { column, comparison, value };
    const oldFilters = filters.filterByNumericValues || [];

    setFilters({
      filterByNumericValues: [...oldFilters, newFilter],
    });

    handleNumericFilters(column, comparison, value);
  }

  return (
    <Form className="d-flex flex-column justify-content-center">
      <Form.Label>
        Filtrar por propriedade:
      </Form.Label>
      <Row>
        <Col>

          <Form.Select
            aria-label="Default select example"
            name="colum-filter"
            data-testid="column-filter"
            value={ column }
            onChange={ ({ target }) => setColumn(target.value) }
          >

            <option value="population">population</option>

            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>

          </Form.Select>
        </Col>
        <Col>
          <Form.Select
            aria-label="Default select example"
            id="range"
            data-testid="comparison-filter"
            value={ comparison }
            onChange={ (ev) => setComparison(ev.target.value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Group as={ Row }>
            <Col>
              <FormControl
                aria-describedby="basic-addon1"
                type="number"
                name="value"
                id="value"
                data-testid="value-filter"
                value={ value }
                onChange={ (ev) => setValue(ev.target.value) }
              />
            </Col>
            <Col>
              <Button
                variant="secondary"
                data-testid="button-filter"
                type="submit"
                id="button-filter"
                name="button-filter"
                onClick={ handleAddFilter }
              >
                Filtrar
              </Button>
            </Col>
          </Form.Group>
        </Col>
      </Row>

    </Form>
  );
}

export default NumericFilters;
