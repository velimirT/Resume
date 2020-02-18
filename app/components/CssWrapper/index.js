/**
 *
 * CssWrapper
 *
 */

// import PropTypes from 'prop-types';
import styled from 'styled-components';
const CssWrapper = styled.div`
  font-family: 'Ubuntu', sans-serif;
  min-height: 5000px;
  margin: 50px;
  position: relative;

  & img {
    float: left;
  }
  & .logo_wrapper {
    width: 100%;
    padding-left: 200px;
    padding-right: 150px;
    text-align: center;
  }
  & .logo_wrapper img {
    max-width: 100%;
    max-height: 100%;
    float: revert;
  }
  & .header_icons_wrapper {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  & .header_link {
    height: 34px;
    margin-right: 20px;
    float: left;
  }
  & .header_icons_wrapper img {
    margin-right: 10px;
    width: 50px;
    max-height: 50px;
  }
  & header,
  main {
    overflow: hidden;
  }
  & .technical_experience {
    position: relative;
  }
  & .total_experience {
    position: absolute;
    right: 40px;
    top: 20px;
    font-size: 20px;
    font-weight: 600;
  }

  & .total_experience .super {
    font-size: 30px;
  }

  & main > section {
    max-height: auto;
    transition: max-height 0.15s ease-out;
    margin: 50px 6px;
    overflow: hidden;
    border-bottom: 1px solid #444;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  }

  & .section_title {
    padding: 25px 20px;
    font-size: 30px;
    border-bottom: 1px solid #444;
    margin: 0;
  }

  & .small {
    font-size: 12px;
  }

  & .sub_section {
    padding: 20px;
    overflow: hidden;
  }
`;

export default CssWrapper;
