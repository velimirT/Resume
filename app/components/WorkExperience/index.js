/**
 *
 * WorkExperience
 *
 */

import React, {useState} from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Button from 'components/Button';
import StyledWorkExperience from 'components/StyledWorkExperience';
import { FormattedMessage } from 'react-intl';

function WorkExperience({
	jobs,
	title
}) {
	let [collapsed, setCollapsed] = useState(true);
	const clickButton = ()=>{
		setCollapsed(!collapsed);
	}
	const renderJobs = ()=>{
		if(collapsed === true){
			return(
				jobs.map((job, key)=>{
		    	return (
		    		<div className="company_logo_wrapper">
		    			<img src={job.logo} alt={job.employer + ' logo'}/>
		    		</div>
		    	)
		    })
	    )
		}else{
			return(
				jobs.map((job, key)=>{
		    	return(
		    		<div className="job">
		    			<h2>{job.employer}</h2>
		    			<h3>{job.position}</h3>
		    			<p className="job_description">{job.description}</p>
		    			<ul className="job_timeframe">
		    				<li>{job.start_date}</li>
		    				<li>{job.end_date}</li>
		    			</ul>
		    		</div>
		    	)
		    })
	    )
		}
	}
  return (
  	<StyledWorkExperience>
			<h2 className="section_title"><FormattedMessage {...title} /> <span className="small">{collapsed ? '(collapsed)':'(expanded)'}</span></h2>
			<Button onClick={clickButton}>{collapsed ? 'EXPAND':'COLLAPSE'}</Button>
			{renderJobs()}
	  </StyledWorkExperience>
  );
}

WorkExperience.propTypes = {
	jobs: PropTypes.array,
	title: PropTypes.object
};

export default WorkExperience;
