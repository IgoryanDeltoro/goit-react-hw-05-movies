import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    axiosRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const axiosRequest = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=b8cc7192580846817e308e88dc3da3b8&language=en-US`
      );
      console.log(response);
      setCast(response.data.cast);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ul>
      {cast.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          {profile_path !== null ? (
            <img
              src={IMAGE_ENDPOINT + profile_path}
              alt="portret"
              width="100"
            />
          ) : (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img src="http://dummyimage.com/100X150/99cccc.jpg&text=No+image!" />
          )}
          <h2>{name}</h2>
          <span>Character: {character}</span>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
