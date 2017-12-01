import styled from 'styled-components';

import colors from '../../styles/colors';
import {media} from '../../helpers/styledComponents.helper';

export const Container = styled.main`
  background-color: ${colors.backgroundColor1};
  padding: 15px;
`;

export const Wrapper = styled.div`
  max-width: 800px;
  margin: auto;
`;

export const SectionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  color: ${colors.color1};
  ${media.medium`
    text-align: center;
  `};
  ${media.small`
    font-size: 20px;
  `};
`;

export const InfoWrapper = styled.div`
  padding: 15px;
  border: solid 1px black;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 14px;
  text-align: center;
`;
