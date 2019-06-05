import React from 'react';
import PropTypes from 'proptypes';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Card from './Card';
import { getCharities } from '../actions/donate';

const Title = styled.div`
  margin: 40px 0 20px 0;
  font-size: 35px;
  text-align: center;
  color: #4B608B;
  font-weight: 700;
`;

const Message = styled.p`
  font-size: 20px;
  color: red;
  text-align: center;
  font-weight: 600;
  height: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 60px;
`;

const Col = styled.div`
  flex-basis: ${(6 / 12) * 100}%;
  position: relative;
  display: flex;
`;

class App extends React.Component {
  componentDidMount() {
    this.props.getCharities();
  }

  render() {
    const { donates, charities, message } = this.props;

    return (
      <>
        <Title>Tamboon React</Title>
        <Message >{message}</Message>
        <Row>
          {!isEmpty(charities) && charities.map(item => {
            return (
              <Col key={item.id} >
                <Card
                  title={item.name}
                  charitiesId={item.id}
                  imageSrc={item.image}
                  currency={item.currency}
                />
              </Col>
            )
          })}
        </Row>
      </>
    );
  }
}

const mapActionToProps = {
  getCharities,
};

const mapStateToProps = state => ({
  charities: state.donate.charities,
  donates: state.donate.donates,
  message: state.donate.message,
});

App.propTypes = {
  getCharities: PropTypes.func,
  charities: PropTypes.instanceOf(Array),
  donate: PropTypes.instanceOf(Array),
  message: PropTypes.string,
};

App.defaultProps = {
  getCharities: () => { },
  charities: [],
  donate: [],
  message: '',
}

export default connect(mapStateToProps, mapActionToProps)(App);
