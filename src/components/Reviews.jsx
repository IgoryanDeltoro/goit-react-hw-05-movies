import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axiosRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const axiosRequest = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=b8cc7192580846817e308e88dc3da3b8&language=en-US`
      );
      console.log(response);
      setReviews(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {reviews.length !== 0 ? (
        <>
          {reviews.map(el => (
            <div key={el.id}>
              <h2>Author: {el.author}</h2>
              <h3>Content:</h3>
              <p>{el.content}</p>
            </div>
          ))}
        </>
      ) : (
        <h3>We don't have any reviews for this movie.</h3>
      )}
    </div>
  );
};

export default Reviews;
