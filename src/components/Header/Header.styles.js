import styled from 'styled-components';

import colors from '../../styles/colors';
import {media} from '../../helpers/styledComponents.helper';

export const Container = styled.header`
  background-color: ${colors.backgroundColor2};
`;

export const Wrapper = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 15px 0;
  ${media.medium`
    text-align: center;
  `};
`;

export const Img = styled.img`
  height: 40px;
  ${media.medium`
    height: 30px;
  `};
  ${media.small`
    height: 20px;
  `};
`;
