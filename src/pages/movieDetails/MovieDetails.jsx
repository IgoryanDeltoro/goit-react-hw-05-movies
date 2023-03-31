import axios from 'axios';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import MovieInfo from './movieInfo/MovieInfo';
import { Back, Link } from './movieInfo/MovieInfo.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [pending, setPending] = useState(false);
  const [details, setDetails] = useState({});
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
      console.log(response);
      setDetails(response.data);
      setPending(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Back to={backLinkRef.current}>Back</Back>
      <MovieInfo details={details} pending={pending} />
      <div>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
