import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { reviewsRequest } from 'service/axiosApiRequest';
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
    const response = await reviewsRequest(movieId);
    setReviews(response);
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
