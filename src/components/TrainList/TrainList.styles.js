import styled from 'styled-components';

import colors from '../../styles/colors';
import {media} from '../../helpers/styledComponents.helper';

export const Container = styled.div`
  background-color: ${colors.backgroundColor2};
  height: 600px;
  overflow-y: auto;
  width: 50%;
  margin-right: 7.5px;
  border-radius: 5px;
  ${props => {
    if (props.loading) {
      return `
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      `;
    }
  }}
  ${media.small`
    display: ${props => props.isHomePage ? 'block' : 'none'};
    width: 100%;
    margin-right: 0;
  `};
`;
