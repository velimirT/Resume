/**
 *
 * StyledTechExperienceSlider
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
const StyledWorkExperience = styled.section`
	position: relative;
	overflow: hidden;

	& .company_logo_wrapper{
		width: 150px;
		min-height: 50px;
		float: left;
		margin: 20px;
	}
	& .company_logo_wrapper img{
		width: 100%;
	}
	& .job_timeframe{
		list-style-type: none;
		position: absolute;
		right: 20px;
		top: 20px;
		font-weight: 600;
	}
	& .job{
		position: relative;
		padding: 20px;
	}
	& .job_description{
		padding-left: 20px;
		padding-right: 60px;
	}
`; 

export default StyledWorkExperience;