import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link, Loading } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo />
        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loading>Loading page...</Loading>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;