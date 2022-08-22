import PropTypes from 'prop-types';
import React from 'react';
import { Input } from 'reactstrap';

const CustomInput = props => {
  const { isNumberOnly, ...rest } = props;
  return <Input {...rest} {...(isNumberOnly)} />;
};

CustomInput.propTypes = {
  isNumberOnly: PropTypes.bool
};

CustomInput.defaultProps = {
  isNumberOnly: false
};
export default CustomInput;
