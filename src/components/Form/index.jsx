import React from 'react';
import './styles.css';

const Form = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};

export default Form;
