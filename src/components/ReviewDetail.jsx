import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from './Comments';

//Hi 

const ReviewDetail = () => {
  const [review, setReview] = useState(null);
  const { id } = useParams();

  useEffect(() => {
	fetch(`https://statistics-backend-jjpb.onrender.com/api/Review/${id}`)
		.then(response => response.json())
		.then(data => {
		console.log('Review data:', data); // Check what fields exist
		setReview(data);
		})
		.catch(error => {
		console.error('Error fetching review:', error);
		});
}, [id]);

  if (!review) return <main><p>Loading...</p></main>;


  return (
    <div>
		<img 
			src={`https://statistics-backend-jjpb.onrender.com${review.img}`}
			alt={review.name_game}
			style={{ maxWidth: '500px', width: '100%', height: 'auto' }}
		/>

		<p>Username: {review.username}</p>
		<p>Rating: {review.rating}</p>
		<p>{review.description}</p>
		<p>Review: {review.reviews[0]}</p>
		<section>
			<Comments />
		</section>
    </div>
  );

};

export default ReviewDetail;