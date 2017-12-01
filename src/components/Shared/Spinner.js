import React from 'react';
import FontAwesome  from 'react-fontawesome';

import colors from '../../styles/colors';

export const Spinner = () => (
  <FontAwesome
    style={{color: colors.color3}}
    name='circle-o-notch'
    size='5x'
    spin
  />
);
