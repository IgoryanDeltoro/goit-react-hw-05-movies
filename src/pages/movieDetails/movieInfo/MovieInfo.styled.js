import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DetailsBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const InfoBox = styled.div``;
export const ImageBox = styled.div`
  margin-right: 20px;
`;
export const TitleInfo = styled.h1`
  font-size: 35px;
  margin-bottom: 15px;
`;
export const Td = styled.td`
  padding: 5px 0;
  vertical-align: top;
  text-align: left;
`;

export const TD = styled.td`
  padding: 12px 0;
  vertical-align: top;
  text-align: left;
`;

export const Image = styled.img`
  min-width: 370px;
`;

export const Back = styled(NavLink)`
  display: block;
  margin-bottom: 20px;
  color: orangered;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
