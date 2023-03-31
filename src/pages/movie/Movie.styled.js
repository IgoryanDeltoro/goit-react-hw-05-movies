const { default: styled } = require('styled-components');

export const MovieList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const MovieItem = styled.li`
  &:hover {
    text-decoration: underline;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

export const TitleBox = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const Title = styled.h3`
  color: #686e70;
`;
