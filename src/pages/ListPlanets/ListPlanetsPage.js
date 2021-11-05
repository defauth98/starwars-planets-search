import React from 'react';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

import Table from '../../components/Table/Table';
import FilterInput from '../../components/FilterInput';
import NumericFilters from '../../components/NumericFilters';

import './styles.css';

function ListPlanetPage() {
  return (
    <div className="list-planets-page">
      <Navbar
        bg="dark"
        variant="dark"
        className="justify-content-center text-white fs-2"
      >
        <span role="img" aria-label="Rocket emoji">🚀 </span>
        {' '}
        Starwars Planet Search
      </Navbar>

      <main className="filters-container w-70">
        <Form className="form">
          <FilterInput />
          <NumericFilters />
        </Form>
        <Table />
      </main>

    </div>

  );
}

export default ListPlanetPage;
