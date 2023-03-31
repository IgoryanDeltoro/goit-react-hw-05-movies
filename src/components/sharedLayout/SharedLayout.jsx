import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Logo,
  Link,
  Loading,
  HeaderBox,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <HeaderBox>
          <Logo />
          <nav>
            <Link to="/">Home</Link>
            <Link to="movies">Movies</Link>
          </nav>
        </HeaderBox>
      </Header>
      <Container>
        <Suspense fallback={<Loading>Loading page...</Loading>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
