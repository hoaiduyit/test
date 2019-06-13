import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'proptypes';
import Button from './Button';
import PayOverlay from './PayOverlay';

const WrapperContent = styled.div`
  flex: auto;
  margin: 40px 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px #888888;
  width: 45%;
  position: relative;
  overflow: hidden;
`;

const DonateContent = styled.div``;

const ImageWrapper = styled.img`
  width: 100%;
  height: 310px;
`;

const TitleContent = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  .title {
    flex: 2;
    font-size: 25px;
    color: #4b608b;
    font-weight: 550;
  }
  .btn-wrapper {
    flex: 1;
    button {
      float: right;
    }
  }
`;

const Card = React.memo(({ title, imageSrc, currency, isFlex }) => {
  const [isShow, setIsShow] = useState(false);

  const showPayOverlay = () => {
    setIsShow(!isShow);
  };

  return (
    <WrapperContent isFlex={isFlex}>
      <PayOverlay
        currency={currency}
        isShow={isShow}
        closePayOverLay={showPayOverlay}
      />
      <DonateContent>
        <ImageWrapper src={`../images/${imageSrc}`} alt="" />
        <TitleContent>
          <p className="title">{title}</p>
          <div className="btn-wrapper">
            <Button title="Donate" onClick={showPayOverlay} />
          </div>
        </TitleContent>
      </DonateContent>
    </WrapperContent>
  );
});

Card.propTypes = {
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  currency: PropTypes.string,
  isFlex: PropTypes.bool,
};

Card.defaultProps = {
  title: '',
  imageSrc: '',
  currency: '',
  isFlex: true,
};

export default Card;
