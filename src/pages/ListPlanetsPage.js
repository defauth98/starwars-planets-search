import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Table from '../components/Table';
import FilterInput from '../components/FilterInput';
import NumericFilters from '../components/NumericFilters';

function ListPlanetPage() {
  return (
    <main>
      <Form>
        <Row>
          <Col>
            <FilterInput />
          </Col>
          <Col>
            <NumericFilters />
          </Col>
        </Row>
      </Form>
      <Table />
    </main>
  );
}

export default ListPlanetPage;
