/**
 *
 * StyledTechExperienceSlider
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
const StyledTechExperienceSlider = styled.div`
	overflow: hidden;
	padding: 0 30px;
	& .title_wrapper{
		width: 50%;
		float: left;
		padding-right: 20px;
  }
	& .title_wrapper h3, .title_wrapper p{
		margin: 20px auto;
	}
	& .title_wrapper h3{
		margin-bottom: 5px;
	}
  & .description{
  	padding-left: 20px;
  	color: #666;
  }
  & .technologies{
  	overflow: hidden;
  	padding-left: 20px;
  }
  & .technologies img{
  	max-height: 30px;
  	max-width: 30px;
  }
`; 

export default StyledTechExperienceSlider;
