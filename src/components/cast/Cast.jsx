/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem, CastList, CastTitle } from './Cast.styled';
import 'react-slideshow-image/dist/styles.css';
import { castRequest } from 'service/axiosApiRequest';

const IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    axiosRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const axiosRequest = async () => {
    const response = await castRequest(movieId);
    setCast(response);
  };

  return (
    <CastList>
      {cast.map(({ id, profile_path, name, character }) => (
        <CastItem key={id}>
          {profile_path !== null ? (
            <img src={IMAGE_ENDPOINT + profile_path} alt="portret" />
          ) : (
            <img src={require('../icon/NoImg.jpg')} />
          )}
          <CastTitle>{name}</CastTitle>
          <p>Character: {character}</p>
        </CastItem>
      ))}
    </CastList>
  );
};

export default Cast;
