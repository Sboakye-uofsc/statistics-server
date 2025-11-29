import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from './Comments';
import './../css/ReviewDetail.css';

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
    <div className="review-detail-container">
      <div className="review-header">
        <div className="review-image">
          <img 
            src={`https://statistics-backend-jjpb.onrender.com${review.img}`}
            alt={review.name_game}
          />
        </div>

        <div className="review-info">
          <h1 className="game-title">{review.name_game}</h1>
          
          <div className="review-meta">
            <p><strong>Username:</strong> {review.username}</p>
            <div>
              <strong>Rating:</strong>
              <div className="rating-container">
                <img 
                  src={`https://statistics-backend-jjpb.onrender.com${review.img}`}
                  alt={review.name_game}
                  className="rating-image"
                />
                <div className="rating-display">{review.rating}</div>
              </div>
            </div>
          </div>

          <div className="review-description">
            <h3>Description</h3>
            <p>{review.description}</p>
          </div>
        </div>
      </div>

      <div className="review-text">
        <h3>Full Review</h3>
        <p>{review.reviews[0]}</p>
      </div>

      <section className="comments-section">
        <Comments />
      </section>
    </div>
  );

};

export default ReviewDetail;