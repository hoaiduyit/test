import React from 'react';
import PropTypes from 'proptypes';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Card from './Card';
import { getCharities, setDonates } from '../actions/donate';

const Wrapper = styled.div`
  padding: 20px 60px;
`;

const Title = styled.div`
  margin: 40px 0 20px 0;
  font-size: 35px;
  text-align: center;
  color: #4b608b;
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
`;

const Col = styled.div`
  flex-basis: ${(6 / 12) * 100}%;
  position: relative;
  display: flex;
`;

const ListAmount = styled.ul`
  margin: 0 20px;
  padding: 0;
  list-style: none;
  text-align: center;
`;

class App extends React.Component {
  componentDidMount() {
    this.props.getCharities();
  }

  componentDidUpdate(prevProps) {
    const { donates, donateItem } = this.props;
    if (donateItem !== prevProps.donateItem) {
      const dumbList = donates;
      dumbList.push(donateItem);
      setDonates(dumbList);
    }
  }

  render() {
    const { donates, charities, message } = this.props;

    return (
      <Wrapper>
        {!isEmpty(charities) &&
          charities.map(item => {
            return (
              <>
                <Card
                  key={item.id}
                  title={item.name}
                  imageSrc={item.image}
                  currency={item.currency}
                />
              </>
            );
          })}
      </Wrapper>
    );
  }
}

const mapActionToProps = {
  getCharities,
  setDonates,
};

const mapStateToProps = state => ({
  charities: state.donate.charities,
  donates: state.donate.donates,
  message: state.donate.message,
  donateItem: state.donate.donateItem,
});

App.propTypes = {
  getCharities: PropTypes.func,
  setDonates: PropTypes.func,
  charities: PropTypes.instanceOf(Array),
  donate: PropTypes.instanceOf(Array),
  message: PropTypes.string,
};

App.defaultProps = {
  getCharities: () => {},
  charities: [],
  donate: [],
  message: '',
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(App);
