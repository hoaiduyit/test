import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const WrapperContent = styled.div`
  background-color: white;
  border: 1px solid black;
  box-shadow: 2px 2px #888888;
  width: auto;
`;

const ImageWrapper = styled.img`
  width: 100%;
`;

const TitleContent = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  .title {
    flex: 1;
    font-size: 25px;
    color: #4B608B;
    font-weight: 550;
  }
  div {
    flex: 1;
    button {
      float: right;
    }
  }
`;

export default class Card extends React.Component {
  render() {
    return (
      <WrapperContent>
        <ImageWrapper src="" alt="" />
        <TitleContent >
          <p className='title' >Text</p>
          <div>
            <Button title='Donate' />
          </div>
        </TitleContent>
      </WrapperContent>
    );
  };
};

