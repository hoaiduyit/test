import React from 'react';
import styled from 'styled-components';
import PropTypes from 'proptypes';
import Button from './Button';

const Wrapper = styled.div`
  background-color: white;
  z-index: 10;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.97;
  text-align: center;
  font-size: 23px;
  color: #4b608b;
  display: ${({ isShow }) => (isShow ? '' : 'none')};
  .close-btn {
    cursor: pointer;
    text-align: right;
    margin: 20px;
    font-size: 30px;
  }
`;

const PayHolder = styled.div`
  margin: 100px 0;
  .description {
    margin-bottom: 10px;
  }
  .radio-holder {
    margin: 20px 0 30px 0;
    input[type='radio'] {
      margin-right: 0;
    }
    .amount {
      margin: 0 15px;
      width: 20px;
      height: 20px;
    }
  }
`;

class PayOverlay extends React.Component {
  render() {
    const { currency, isShow, closePayOverLay } = this.props;

    return (
      <Wrapper isShow={isShow}>
        <div role="button" className="close-btn" onClick={closePayOverLay}>
          ⨯
        </div>
        <PayHolder>
          <div className="description">{`Select the amount to donate (${currency})`}</div>
          <div className="radio-holder">
            <input className="amount" type="radio" name="amount" value="10" />
            10
            <input className="amount" type="radio" name="amount" value="20" />
            20
            <input className="amount" type="radio" name="amount" value="50" />
            50
            <input className="amount" type="radio" name="amount" value="100" />
            100
            <input className="amount" type="radio" name="amount" value="500" />
            500
          </div>
          <Button title="Pay" />
        </PayHolder>
      </Wrapper>
    );
  }
}

PayOverlay.propTypes = {
  isShow: PropTypes.bool.isRequired,
  closePayOverLay: PropTypes.func.isRequired,
  currency: PropTypes.string,
};

PayOverlay.defaultProps = {
  currency: 'USD',
};

export default PayOverlay;
