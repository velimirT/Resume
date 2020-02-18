/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import StyledButton from 'components/StyledButton';

function Button({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]),
};

export default Button;
