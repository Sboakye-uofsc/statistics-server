import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewDetail = () => {
  const [review, setReview] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch review based on the ID from the URL
    fetch(`https://statistics-backend-jjpb.onrender.com/api/Review/${id}`)
      .then(response => response.json())
      .then(data => {
        setReview(data);
      })
      .catch(error => {
        console.error('Error fetching review:', error);
      });
  }, [id]);

  if (!review) return <main><p>Loading...</p></main>;

  return (
    <main>
      <h1>{review.name_game}</h1>
      <img src={review.img} alt={review.name_game} />
      <p>Username: {review.username}</p>
      <p>Rating: {review.rating}</p>
      <p>{review.description}</p>
      <p>Review: {review.reviews[0]}</p>
    </main>
  );
};

export default ReviewDetail;