/**
 *
 * StyledStickyImageWrapper
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
const StyledStickyImageWrapper = styled.div`
	position: absolute;
	left: 20px;
	top: 0;
	& img{
		border-radius: 50%;
		max-width: 100%;
  }
`; 

export default StyledStickyImageWrapper;
