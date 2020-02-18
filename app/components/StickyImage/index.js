/**
 *
 * StickyImage
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import StyledStickyImage from 'components/StyledStickyImage';
import StyledStickyImageWrapper from 'components/StyledStickyImageWrapper';

function StickyImage({ stickToEl }) {
  const [fixed, setFixed] = useState(true);
  const logoEl = React.createRef();

  const handleScroll = () => {
    if (stickToEl.current !== null) {
      if (window.pageYOffset >= stickToEl.current.offsetTop + 30) {
        // the -20 is because the scroll step is around 20px and without that the image scrolls past the intended position before bouncing back to it on the next scroll step
        // to be replaced with an actual calculation of the difference btw the top offset of the target element and the scroll step
        setFixed(false);
      } else {
        setFixed(true);
      }
    }
    return function clean() {
      document.removeEventListener('scroll');
    };
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <StyledStickyImageWrapper>
      <StyledStickyImage
        ref={logoEl}
        style={
          fixed
            ? { position: 'fixed' }
            : { position: 'absolute', top: stickToEl.current.offsetTop + 30 }
        }
      >
        {/* eslint-disable global-require */}
        <img
          src={require('images/velimir_t_pic.jpg')}
          alt="Velimir Tchatchevsky"
        />
        {/* eslint-enable global-require */}
      </StyledStickyImage>
    </StyledStickyImageWrapper>
  );
}

StickyImage.propTypes = {
  stickToEl: PropTypes.object,
};

export default StickyImage;
