/**
 *
 * CodeSamples
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import StyledCodeSamples from 'components/StyledCodeSamples';
import messages from './messages';

function CodeSamples({ links }) {
  return (
    <StyledCodeSamples>
      <h2 className="section_title">
        <FormattedMessage {...messages.header} />
        {links &&
          links.length &&
          links.map(el => (
            <div className="header_link">
              <a href={el.url} target="_blank">
                <img src={el.img} alt={el.alt} />
              </a>
            </div>
          ))}
      </h2>
    </StyledCodeSamples>
  );
}

CodeSamples.propTypes = {
  links: PropTypes.array,
};

export default CodeSamples;
