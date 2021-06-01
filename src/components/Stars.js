import React from 'react';
import utils from '../math-utils.js';

const Stars = (props) => (
    <>
      {utils.range(1, props.stars).map((starId) => (
        <div className="star" key={starId} />
      ))}
    </>
  );

export default Stars;