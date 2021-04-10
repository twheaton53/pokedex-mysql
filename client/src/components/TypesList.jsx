import React from 'react';
import TypesView from './TypesView.jsx';

const TypesList = ( { types } ) => (
  <>
    {types.map((type, index) => (
      <TypesView type={type} key={index} />
    ))}
  </>
)

export default TypesList;