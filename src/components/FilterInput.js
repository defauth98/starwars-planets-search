import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import planetContext from '../contexts/planetContext';

function FilterInput() {
  const { filters, setFilters, handleNameFilter } = useContext(planetContext);
  const [inputText, setInputText] = useState('');

  function handleInputChange(ev) {
    const name = ev.target.value;

    setInputText(name);

    const newFilter = filters;

    newFilter.filterByName.name = name;

    setFilters(newFilter);

    handleNameFilter();
  }

  return (
    <Form>
      <Form.Group
        className="d-flex flex-column justify-content-center p-2"
        controlId="formBasicEmail"
      >
        <Form.Label>
          Filtrar por nome:
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="Nome do planeta"
          value={ inputText }
          onChange={ handleInputChange }
          data-testid="name-filter"
        />
      </Form.Group>
    </Form>
  );
}

export default FilterInput;
