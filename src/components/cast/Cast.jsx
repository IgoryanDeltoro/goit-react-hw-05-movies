/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem, CastTitle } from './Cast.styled';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

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
    <Slide slidesToScroll={7} slidesToShow={7} indicators={true}>
      {cast.map(({ id, profile_path, name, character }) => (
        <CastItem key={id}>
          {profile_path !== null ? (
            <img src={IMAGE_ENDPOINT + profile_path} alt="portret" />
          ) : (
            <img src="http://dummyimage.com/100X150/99cccc.jpg&text=Actor" />
          )}
          <CastTitle>{name}</CastTitle>
          <p>Character: {character}</p>
        </CastItem>
      ))}
    </Slide>
  );
};

export default Cast;
