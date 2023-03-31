import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link state={{ from: Location }} to={`movies/${id}`}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
