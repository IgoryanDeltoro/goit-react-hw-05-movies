import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Image, MovieItem, MovieList, Title, TitleBox } from './Home.styled';
import { trendingMoviesRequest } from 'service/axiosApiRequest';

const IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const Location = useLocation();
  useEffect(() => {
    hendleTrendingRequest();
  }, []);

  const hendleTrendingRequest = async () => {
    const response = await trendingMoviesRequest();
    setMovies(response);
  };

  return (
    <MovieList>
      {movies.map(({ id, title, backdrop_path, profile_path }) => (
        <MovieItem key={id}>
          <Link state={{ from: Location }} to={`movies/${id}`}>
            {profile_path !== null ? (
              <Image src={`${IMAGE_ENDPOINT}${backdrop_path}`} alt="portret" />
            ) : (
              // eslint-disable-next-line jsx-a11y/alt-text
              <Image src={require('../../components/icon/NoImg.jpg')} />
            )}

            <TitleBox>
              <Title>{title}</Title>
            </TitleBox>
          </Link>
        </MovieItem>
      ))}
    </MovieList>
  );
};

export default Home;
