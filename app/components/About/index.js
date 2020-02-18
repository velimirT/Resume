/**
 *
 * About
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import StyledAbout from 'components/StyledAbout';

function About({ innerRef, children }) {
  return (
    <StyledAbout className="about" ref={innerRef}>
      {children}
    </StyledAbout>
  );
}

About.propTypes = {
  innerRef: PropTypes.object,
  children: PropTypes.object,
};

export default React.forwardRef((props, ref) => (
  <About innerRef={ref} {...props} />
));
