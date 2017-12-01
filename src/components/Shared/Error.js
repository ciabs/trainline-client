import React from 'react';
import FontAwesome  from 'react-fontawesome';

export const Error = () => (
  <FontAwesome
    style={{color: 'red', position: 'absolute', top: '15px', right: '15px'}}
    name='exclamation-triangle'
    size='2x'
  />
);
