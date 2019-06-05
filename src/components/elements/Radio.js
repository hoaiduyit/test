import React from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';

const InputRadio = styled.input`
  &[type='radio'] {
    margin-right: 3px;
  }
  margin: 0 15px;
  width: 20px;
  height: 20px;
`;

const Radio = React.memo(({ 
  name, 
  value, 
  text, 
  onChange,
}) => {
  return (
    <>
      <InputRadio
        type='radio'
        name={name}
        value={value}
        onChange={onChange}
      />{text} 
    </>
  )
});

Radio.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func,
};

Radio.defaultProps = {
  name: '',
  value: '',
  text: '',
  onChange: '',
};

export default Radio;