/**
 *
 * StyledCircleIcon
 *
 */

// import PropTypes from 'prop-types';
import styled from 'styled-components';
const StyledCircleIcon = styled.div`
  width: 50px;
  height: 50px;
  float: left;
  margin-right: 20px;
  cursor: pointer;
  & img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
  }
`;

export default StyledCircleIcon;
