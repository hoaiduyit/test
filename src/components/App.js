import React from 'react';
import PropTypes from 'proptypes';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Card from './Card';
import { getCharities } from '../actions/donate';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 60px;
`;

class App extends React.Component {
  componentDidMount() {
    this.props.getCharities();
  }

  render() {
    const { donate } = this.props;

    return (
      <Wrapper>
        {!isEmpty(donate) && donate.map(item => {
          return (
            <>
              <Card
                key={item.id}
                title={item.name}
                imageSrc={item.image}
                currency={item.currency}
              />
            </>
          )
        })}
      </Wrapper>
    );
  }
}

const mapActionToProps = {
  getCharities,
};

const mapStateToProps = state => ({
  donate: state.donate.donate,
  message: state.donate.message,
});

App.propTypes = {
  getCharities: PropTypes.func,
  donate: PropTypes.instanceOf(Array),
  message: PropTypes.string,
};

App.defaultProps = {
  getCharities: () => { },
  donate: [],
  message: '',
}

export default connect(mapStateToProps, mapActionToProps)(App);
