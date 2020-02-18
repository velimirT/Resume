/**
 *
 * TechExperience
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import TechExperienceSlider from 'components/TechExperienceSlider';
import { FormattedMessage } from 'react-intl';

function TechExperience({
	technologic_experience,
	techExperienceTitle,
	startDate,
	title
}) {
	const currentYear = new Date().getFullYear();
  let technologiesList = [];
  console.log('currentYear', currentYear, 'startDate', startDate, 'result', (currentYear - startDate));

  technologic_experience.map((el, k)=>{
  	technologiesList.push(
	  	<TechExperienceSlider
				title={el.title}
				description={el.description}
				technologies={el.technologies}
				value={(currentYear - el.start_year)}
				maxScale={10}
			/>
		)
  });

  return (
		<section className='technical_experience'>
	    	<h2 className="section_title"><FormattedMessage {...title} />{techExperienceTitle}</h2>
    		<span className='total_experience'>Total: <span className="super">{(currentYear - startDate)}</span> 1/4 years</span>
				{
					technologiesList.map((el,k)=>{
						return el;
					})
	  		}
	  </section>
	)
}

TechExperience.propTypes = {
	title: PropTypes.object,
	technologic_experience: PropTypes.array,
	techExperienceTitle: PropTypes.string,
	startDate: PropTypes.number
};

export default TechExperience;
