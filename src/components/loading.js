import React from 'react';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';

const Loading = ({ type, color }) => (
  <ReactLoading type={ type } color={ color } height={ 100 } width={ 50 } />
);

Loading.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Loading;
