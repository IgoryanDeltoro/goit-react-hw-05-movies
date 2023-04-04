import { lazy, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { movieDetailsRequest } from 'service/axiosApiRequest';
import { Back, Link } from '../../components/movieInfo/MovieInfo.styled';
import { InfoError } from './MovieDetails.styled';
const MovieInfo = lazy(() => import('../../components/movieInfo/MovieInfo'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [pending, setPending] = useState(false);
  const [details, setDetails] = useState([]);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    axiosRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const axiosRequest = async () => {
    setPending(false);
    const response = await movieDetailsRequest(movieId, setPending);
    if (response !== undefined) {
      setDetails(response);
      return;
    }
    setDetails([]);
    setPending(true);
  };

  return (
    <>
      <Back to={backLinkRef.current}>Back</Back>
      {details.length !== 0 ? (
        <>
          <MovieInfo details={details} pending={pending} />
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
          <Outlet />
        </>
      ) : (
        <>
          {pending && (
            <InfoError>There is no information about this movie!</InfoError>
          )}
        </>
      )}
    </>
  );
};
export default MovieDetails;
