import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 16px;
`;

export const CastItem = styled.li`
  display: block;
  width: 100%;
`;

export const CastTitle = styled.h3`
  margin-top: 5px;
  margin-bottom: 5px;
`;
