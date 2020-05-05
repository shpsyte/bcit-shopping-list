import React from 'react';
import './styles.css';

const Button = ({ type, ...props }) => {
  // eslint-disable-next-line react/button-has-type
  return <button type={type} {...props} />;
};

export default Button;
