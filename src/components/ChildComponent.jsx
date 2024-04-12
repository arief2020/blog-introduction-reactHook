import React from 'react'
import PropTypes from 'prop-types';

export default function ChildComponent({increment}) {
  return (
    <div>
      <h2>Child Component</h2>
      <button type='button' onClick={increment}>Increment Count from Child</button>
    </div>
  );
}
ChildComponent.propTypes = {
  increment: PropTypes.func.isRequired
};