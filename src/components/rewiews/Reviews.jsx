import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ReviewsBox,
  ReviewsTitle,
  RewiewsDescr,
  RewiewsSpan,
} from './Rewiews.styled';

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
    <ReviewsBox>
      {reviews.length !== 0 ? (
        <>
          {reviews.map(el => (
            <div key={el.id}>
              <ReviewsTitle>Author: {el.author}</ReviewsTitle>
              <RewiewsDescr>
                <RewiewsSpan>Content: </RewiewsSpan>
                {el.content}
              </RewiewsDescr>
            </div>
          ))}
        </>
      ) : (
        <h3>We don't have any reviews for this movie.</h3>
      )}
    </ReviewsBox>
  );
};

export default Reviews;
