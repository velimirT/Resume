/**
 *
 * CircleIcon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import StyledCircleIcon from 'components/StyledCircleIcon';
import messages from './messages';

function CircleIcon({ icon }) {
  return (
    <StyledCircleIcon>
      <img src={icon} alt={messages.header} />
    </StyledCircleIcon>
  );
}

CircleIcon.propTypes = { icon: PropTypes.string };

export default CircleIcon;
