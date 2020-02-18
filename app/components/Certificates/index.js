/**
 *
 * Certificates
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import StyledCertificates from 'components/StyledCertificates';

function Certificates({ title, certificates }) {
  return (
    <StyledCertificates>
      <h2 className="section_title">{title}</h2>
      <div className="sub_section">
        {certificates &&
          certificates.length > 0 &&
          certificates.map(el => (
            <div className="header_link">
              <a href={el.url} target="_blank">
                <img src={el.img} alt={el.alt} />
              </a>
            </div>
          ))}
      </div>
    </StyledCertificates>
  );
}

Certificates.propTypes = {
  title: PropTypes.string,
  certificates: PropTypes.array,
};

export default Certificates;
