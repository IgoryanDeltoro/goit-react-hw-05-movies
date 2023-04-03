import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBox from '../../components/searchbar/SearchBox.jsx';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesRequest } from 'service/axiosApiRequest.js';
import {
  Image,
  MovieItem,
  MovieList,
  Title,
  TitleBox,
} from './Movie.styled.js';

const IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';

const Movies = () => {
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('query') ?? '';
  const Location = useLocation();

  useEffect(() => {
    axiosRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productName]);

  const axiosRequest = async () => {
    const response = await searchMoviesRequest(productName);
    setResults(response);
  };
  const hendleOnSubmit = prop => {
    setSearchParams({ query: `${prop}` });
  };

  return (
    <>
      <SearchBox onSubmit={hendleOnSubmit} />
      <MovieList>
        {results.map(({ id, name, title, backdrop_path, profile_path }) => (
          <MovieItem key={id}>
            <Link state={{ from: Location }} to={`${id}`}>
              {backdrop_path && profile_path !== null ? (
                <Image
                  src={`${IMAGE_ENDPOINT}${backdrop_path}`}
                  alt="portret"
                />
              ) : (
                // eslint-disable-next-line jsx-a11y/alt-text
                <Image src={require('../../components/icon/NoImg.jpg')} />
              )}
              <TitleBox>
                <Title>{name ?? title}</Title>
              </TitleBox>
            </Link>
          </MovieItem>
        ))}
      </MovieList>
    </>
  );
};

export default Movies;
