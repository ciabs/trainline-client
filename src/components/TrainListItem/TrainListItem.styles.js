import styled from 'styled-components';

import config from '../../config';
import {NavLink} from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #eee;
  border-left: ${props => props.isTrainSelected ? '3px solid rgb(46, 41, 117)' : '3px solid white'};
  padding: 15px;
  cursor: pointer;
  transition: background-color .25s linear;
  :hover {
    background-color: #d1f4ec;
    border-left: 3px solid rgb(46, 41, 117);
  }
  background-color: ${props => props.isTrainSelected ? '#d1f4ec' : 'white'}
`;

export const FirstCol = styled.div`
  display: flex; 
  flex-direction: column;
  flex-grow: 1;
  align-content: center;
  justify-content: center;
  span {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const SecondCol = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;

export const ThirdCol = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;

export const FourthCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 20px;
  align-content: center;
  justify-content: center;
  color: rgb(46, 41, 117);
`;

export const TrainStateStyled = styled.span`
  font-size: 14px;
  color: ${props => props.trainState !== config.trainState.ON_TIME ? 'red' : 'rgb(25, 115, 40)'};
  font-weight: ${props => props.trainState !== config.trainState.ON_TIME ? 'bold' : 'normal'};
`;

export const Operator = styled.span`
  font-size: 14px;
  color: #8c9190;
`;

export const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: black;
  display: flex;
  width: 100%;
`;
