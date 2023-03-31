import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBox from '../../components/searchbar/SearchBox.jsx';

import { useSearchParams } from 'react-router-dom';
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
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=b8cc7192580846817e308e88dc3da3b8&language=en-US&query=${productName}&page=1&include_adult=false`
      );
      console.log(response);
      setResults(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  const hendleOnSubmit = prop => {
    setSearchParams({ query: `${prop}` });
  };

  return (
    <>
      <SearchBox onSubmit={hendleOnSubmit} />
      <MovieList>
        {results.map(({ id, name, title, backdrop_path }) => (
          <MovieItem key={id}>
            <Link state={{ from: Location }} to={`${id}`}>
              <Image
                src={`${IMAGE_ENDPOINT}${backdrop_path}`}
                alt="poster_image"
              />
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

//
