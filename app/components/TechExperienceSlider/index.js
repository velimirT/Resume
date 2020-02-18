/**
 *
 * TechExperienceSlider
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import RangeDisplay from 'components/RangeDisplay';
import StyledTechExperienceSlider from 'components/StyledTechExperienceSlider';

function TechExperienceSlider({
	title,
	description,
	value,
	maxScale,
	technologies
}) {
  return (
    <StyledTechExperienceSlider>
	    <div className="title_wrapper">
	      <h3>{title}</h3>
	      <div className="technologies">
		      {
		      	technologies.map((el,k)=>{
		      		return(
		      			<img src={el.img} alt={el.title} />
		      		)
		      	})
		      }
	      </div>
	      <p className="description">
	      	{description}
	      </p>
	    </div>
      <RangeDisplay value={value} max={maxScale}/>
    </StyledTechExperienceSlider>
  );
}

TechExperienceSlider.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	value: PropTypes.number,
	maxScale: PropTypes.number,
	technologies: PropTypes.array
};

export default TechExperienceSlider;
