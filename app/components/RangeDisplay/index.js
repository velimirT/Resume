/**
 *
 * RangeDisplay
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import StyledRangeDisplay from 'components/StyledRangeDisplay';

function RangeDisplay({ value, max }) {
  const valueEl = React.createRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth((value * valueEl.current.offsetWidth) / max);
  });
  return (
    <StyledRangeDisplay ref={valueEl}>
      <div className="range_value" style={{ width: `${width} px` }}>
        <div className="range_tooltip">{value} years</div>
      </div>
    </StyledRangeDisplay>
  );
}

RangeDisplay.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
};

export default RangeDisplay;
