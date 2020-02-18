/**
 *
 * StyledRangeDisplay
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
const StyledRangeDisplay = styled.div`
	height: 30px;
	border: 1px solid #ccc;
	border-radius: 15px;
	width: 50%;
	float: right;
	margin-top: 40px;
	
	& .range_value{
		background-color: #3ddd2e;
		height: 100%;
		border-radius: 15px 0 0 15px;
		border-right: 3px solid #444;
		position: relative;
	}

	& .range_tooltip{
		position: absolute;
		top: 35px;
		right: -50px;
		font-size: 20px;
	}

`; 

export default StyledRangeDisplay;
