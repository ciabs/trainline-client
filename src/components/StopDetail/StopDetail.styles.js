import styled from 'styled-components';

import colors from '../../styles/colors';
import config from '../../config';

export const Container = styled.div`
  display: flex;
  height: 50px;
`;

export const RightCell = styled.div`
  width: 60px;
`;

export const LeftCell = styled.div`
  border-left: ${props => props.isLastStop ? 'none' : `solid 1px ${colors.color3}`};
  padding-left: 20px;
  position: relative;
`;

export const Circle = styled.div`
  display: flex;
  position: absolute;
  border: solid 1px ${colors.color3};
  ${props => {
    switch (props.trainPosition) {
      case config.trainPosition.TRAIN:
        return `
        background-color: ${colors.color3};
        width: 20px;
        height: 20px;
        left: -11px;
        `;
      case config.trainPosition.EMPTY:
        return `
          background-color: white;
          width: 10px;
          height: 10px;
          left: -6px;
        `;
      case config.trainPosition.PASSED:
      default:
        return `
          background-color: black;
          width: 14px;
          height: 14px;
          left: -7px;
        `;
    }
  }}; 
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`;

export const CircleMiddle = styled.div`
  display: flex;
  position: absolute;
  border: solid 1px ${colors.color3};
  ${props => {
    if (props.trainPosition === config.trainPosition.TRAIN) {
      return `
      background-color: ${colors.color3};
      width: 20px;
      height: 20px;
      left: -11px;
      top: 20px;
      `;
    }
  }}; 
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`;

export const TrainStateStyled = styled.div`
  color: #999;  
  font-size: 14px;
`;

export const Location = styled.div`
  ${props => {
    if (props.isPassed) {
      return `
        color: rgb(128, 128, 128);
        font-weight: bold;
      `;
    }  
  }}
`;
