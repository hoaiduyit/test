import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import Button from './elements/Button';
import Radio from './elements/Radio';
import { addDonate } from '../actions/donate';

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
  }
`;

<<<<<<< HEAD
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
=======

const PayOverlay = React.memo(({ 
  currency, 
  isShow, 
  closePayOverLay, 
  addDonate,
  charitiesId
}) => {
  const [amount, setAmount] = useState('10');
  const listRadioBtn = ['10', '20', '50', '100', '500'];

  const changeAmount = (e) => {
    setAmount(e.target.value);
  }

  const addAmountDonate = () => {
    addDonate({ charitiesId, currency, amount });
>>>>>>> 9c0e03c13d7fb312c4db4cd946c10fc6128862c7
  }

  return (
    <Wrapper isShow={isShow}>
      <div role='button' className='close-btn' onClick={closePayOverLay} >⨯</div>
      <PayHolder>
        <div className='description' >{`Select the amount to donate (${currency})`}</div>
        <div className='radio-holder'  >
          {listRadioBtn.map(item => {
            return (
              <Radio
                key={item}
                name='amount'
                value={item}
                text={item}
                onChange={changeAmount}
              />
            )
          })}
        </div>
        <Button title='Pay' onClick={addAmountDonate} />
      </PayHolder>
    </Wrapper>
  );
});

const mapActionToProps = {
  addDonate,
};

const mapStateToProps = state => ({
});

PayOverlay.propTypes = {
  isShow: PropTypes.bool.isRequired,
  closePayOverLay: PropTypes.func.isRequired,
  charitiesId: PropTypes.number.isRequired,
  addDonate: PropTypes.func,
  setDonates: PropTypes.func,
  currency: PropTypes.string,
  donates: PropTypes.instanceOf(Array),
  donateItem: PropTypes.instanceOf(Object),
};

PayOverlay.defaultProps = {
  addDonate: () => { },
  setDonates: () => { },
  donates: [],
  donateItem: {},
  currency: 'USD',
};

export default connect(mapStateToProps, mapActionToProps)(PayOverlay);
