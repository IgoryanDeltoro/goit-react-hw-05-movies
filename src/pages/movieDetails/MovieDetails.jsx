import axios from 'axios';
import { lazy, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
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
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=b8cc7192580846817e308e88dc3da3b8&language=en-US`
      );
      setDetails(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setPending(true);
    }
  };

  return (
    <>
      <Back to={backLinkRef.current}>Back</Back>
      {pending && (
        <>
          {details.length !== 0 ? (
            <>
              <MovieInfo details={details} pending={pending} />
              <Link to="cast">Cast</Link>
              <Link to="reviews">Reviews</Link>
              <Outlet />
            </>
          ) : (
            <InfoError>There is no information about movies!</InfoError>
          )}
        </>
      )}
    </>
  );
};
export default MovieDetails;
