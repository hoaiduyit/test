import React from 'react';
import styled from 'styled-components';
import PropTypes from 'proptypes';

const Wrapper = styled.button`
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: 1.5px solid #1732c1;
  padding: 6px;
  border-radius: 5px;
  color: #1732c1;
  font-size: 17px;
  font-weight: 600;
`;

const Button = ({ title, onClick }) => {
  return <Wrapper onClick={onClick}>{title}</Wrapper>;
};

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  title: 'Button',
  onClick: () => {},
};

export default Button;
