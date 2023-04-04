import { lazy, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { movieDetailsRequest } from 'service/axiosApiRequest';
import { Back, Link } from '../../components/movieInfo/MovieInfo.styled';
import { InfoError } from './MovieDetails.styled';
const MovieInfo = lazy(() => import('../../components/movieInfo/MovieInfo'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    axiosRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const axiosRequest = async () => {
    const response = await movieDetailsRequest(movieId);
    if (response !== undefined) {
      setDetails(response);
      return;
    }
    setDetails([]);
  };
  console.log(details);
  return (
    <>
      <Back to={backLinkRef.current}>Back</Back>
      {details.length !== 0 ? (
        <>
          <MovieInfo details={details} />
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
          <Outlet />
        </>
      ) : (
        <InfoError>There is no information about this movie!</InfoError>
      )}
    </>
  );
};
export default MovieDetails;
