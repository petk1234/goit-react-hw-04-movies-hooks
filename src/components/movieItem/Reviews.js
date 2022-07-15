import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import getResponse from "../../server/serverResponse";
function Reviews() {
  const [id] = useOutletContext();
  const [reviews, setReviews] = useState();
  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=79c40bd34353ff43c76be010da767c58&language=en-US`;
    getResponse(url).then((data) => {
      console.log(data);
      setReviews(data.results);
    });
  }, []);
  return (
    <>
      {reviews !== undefined ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews were found</p>
      )}
    </>
  );
}
export default Reviews;
