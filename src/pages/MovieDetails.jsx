import axios from 'axios';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [pending, setPending] = useState(false);
  const [details, setDetails] = useState({});
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');
  console.log(location);
  console.log(backLinkRef);
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
      <Link to={backLinkRef.current}>Back</Link>
      <div>
        <h1>{details.original_title}</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <h2>Rating:</h2>
              </td>
              <td>
                <span>
                  IMDb:{details.vote_average}({details.vote_count})
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Genres:</h2>
              </td>
              <td>
                <span>{pending && details.genres.map(({ name }) => name)}</span>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Budget:</h2>
              </td>
              <td>
                <span>{details.budget}</span>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Release date:</h2>
              </td>
              <td>
                <span>{details.release_date}</span>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Overview:</h2>
              </td>
              <td>
                <p>{details.overview}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        {pending && (
          <img src={IMAGE_ENDPOINT + details.poster_path} alt="poster_image" />
        )}
      </div>
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
