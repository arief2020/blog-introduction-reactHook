import React from 'react'
import PropTypes from 'prop-types';

export default function ItemComponent({ id, onDelete}) {
  return (
    <div>
      <span>Item {id}</span>
      <button type='button' onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
ItemComponent.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired
};