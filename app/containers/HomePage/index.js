/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import StickyImage from 'components/StickyImage';
import CssWrapper from 'components/CssWrapper';
import CircleIcon from 'components/CircleIcon';
import About from 'components/About';
import TechExperienceSlider from 'components/TechExperienceSlider';
import WorkExperience from 'components/WorkExperience';
import CodeSamples from 'components/CodeSamples';
import Certificates from 'components/Certificates';
import TechExperience from 'components/TechExperience';

export function HomePage({
	homePage
}) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });
  let { 
  	jobs, 
  	github, 
  	stackoverflow, 
  	codeSamples, 
  	certificates, 
  	technologic_experience, 
  	start_date,
  	...props
  } = homePage;
  
  let aboutEl = React.createRef();
  return (
  	<CssWrapper>
	  	<header>
	      <StickyImage stickToEl={aboutEl} />
	      <div className="logo_wrapper">
		      <img src = {require('images/logo.svg')} alt = {<FormattedMessage {...messages.header} />} />
	      </div>
	      <div className="header_icons_wrapper">
		      <CircleIcon icon={require('images/phone_icon.png')} />
		      <CircleIcon icon={require('images/email_icon.png')} />
	    	</div>
	    </header>
	    <main>
	    	<About ref={aboutEl}>
	    		<h2 className="section_title"><FormattedMessage {...messages.aboutTitle} /></h2>
	    		<p>
			  		<div className="pic_placeholder"></div>
		    		<FormattedMessage {...messages.aboutContent} />
		    	</p>
	    	</About>

    		<TechExperience title={{...messages.techExperienceTitle}} startDate={start_date} technologic_experience={technologic_experience} />
	    	<WorkExperience jobs={jobs} title={{...messages.workExperienceTitle}}/>
	    	<CodeSamples links={codeSamples} />
	    	<Certificates certificates={certificates} title={<FormattedMessage {...messages.certificatesTitle}/>} />

	    </main>
    </CssWrapper>
  );
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
