import styled from 'styled-components';

import colors from '../../styles/colors';
import {media} from '../../helpers/styledComponents.helper';

export const Container = styled.div`
  background-color: ${colors.backgroundColor2};
  min-height: 600px;
  overflow-y: auto;
  width: 50%;
  margin-left: 7.5px;
  padding: 5px 15px 0;
  box-sizing: border-box;
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
    width: 100%;
    margin-left: 0;
  `};
`;

export const TitleBar = styled.div`
  display: flex;
  margin-bottom: 15px;
  position: relative;
`;

export const TrainWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 10px;
  display: none;
  ${media.small`
    display: block;
  `};
`;

export const StationsWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.color2};
`;

export const Station = styled.span`
  color: ${colors.color1};
`;
