import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Test extends PureComponent {
  render() {
     const { PropTypes } = this.props;
    return <div>{PropTypes}</div>;
  }
}

Test.propTypes = {
  PropTypes: PropTypes.number
};

Test.defaultProps = {
  PropTypes: undefined
};

export default Test;