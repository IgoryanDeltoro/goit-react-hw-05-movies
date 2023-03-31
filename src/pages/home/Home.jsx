import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Image, MovieItem, MovieList, Title, TitleBox } from './Home.styled';

const IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const Location = useLocation();
  useEffect(() => {
    axiosRequest();
  }, []);

  const axiosRequest = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=b8cc7192580846817e308e88dc3da3b8`
      );
      console.log(response);
      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MovieList>
      {movies.map(({ id, title, backdrop_path }) => (
        <MovieItem key={id}>
          <Link state={{ from: Location }} to={`movies/${id}`}>
            <Image
              src={`${IMAGE_ENDPOINT}${backdrop_path}`}
              alt="poster_image"
            />
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
