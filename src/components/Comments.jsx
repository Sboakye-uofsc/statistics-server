import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import { getComments, createComment, deleteComment as deleteCommentAPI, updateComment as updateCommentAPI } from "./api";
import "./../css/Comments.css";

//HUGE SHOOT OUT TO this YouTube Channel Monsterlessons Academy for helping

const Comment = ({ comment, replies, currentUserId, addComment, deleteComment, updateComment}) => {
	const [showReplyForm, setShowReplyForm] = useState(false);
	const [showEditForm, setShowEditForm] = useState(false);
	const canReply = Boolean(currentUserId);
	const createdAt = new Date(comment.createdAt).toLocaleDateString();
	
	return (
		<div className="comment">
			<div className="comment-header">
				<div className="comment-author">{comment.username}</div>
				<div className="comment-date">{createdAt}</div>
			</div>
			<div className="comment-body">{comment.body}</div>
			<div className="comment-actions">
				{canReply && (
					<div
					className="comment-reply-button"
					onClick={() => setShowReplyForm(!showReplyForm)}
					>
					Reply
					</div>
				)}
				{currentUserId === comment.userId && (
					<>
						<div 
							className="comment-edit-button"
							onClick={() => setShowEditForm(!showEditForm)}
						>
							Edit
						</div>
						<div 
							className="comment-delete-button"
							onClick={() => deleteComment(comment._id)}
						>
							Delete
						</div>
					</>
				)}
			</div>
			{showEditForm && (
				<CommentForm 
					submitLabel="Update"
					handleSubmit={(text) => {
						updateComment(text, comment._id);
						setShowEditForm(false);
					}}
					initialText={comment.body}
				/>
			)}
			{showReplyForm && (
				<CommentForm 
					submitLabel="Reply"
					handleSubmit={(text) => {
						addComment(text, comment._id);
						setShowReplyForm(false);
					}}
				/>
			)}
			{replies.length > 0 && (
				<div className="replies">
					{replies.map(reply => (
						<Comment
							key={reply._id}
							comment={reply}
							replies={[]}
							currentUserId={currentUserId}
							addComment={addComment}
							deleteComment={deleteComment}
							updateComment={updateComment}
						/>
					))}
				</div>
			)}
		</div>
	);
};

const Comments = ({ reviewId, currentUserId, currentUsername = "Anonymous" }) => {
	const [backendComments, setBackendComments] = useState([]);
	const [activeComment, setActiveComment] = useState(null);
	const [loading, setLoading] = useState(true);
	
	const rootComments = backendComments.filter(
		(comment) => comment.parentId === null
	);
	
	const getReplies = (commentId) => {
		return backendComments
			.filter((comment) => comment.parentId === commentId)
			.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
	};
	
	const addComment = async (text, parentId = null) => {
		try {
			console.log('Attempting to add comment...'); // Debug
			const comment = await createComment(reviewId, text, parentId, currentUserId, currentUsername);
			console.log('Comment created successfully:', comment); // Debug
			setBackendComments([comment, ...backendComments]);
		} catch (error) {
			console.error("Failed to add comment:", error);
			alert("Failed to post comment. Please try again.");
		}
	};

	const deleteComment = async (commentId) => {
		try {
			await deleteCommentAPI(reviewId, commentId);
			setBackendComments(backendComments.filter(comment => comment._id !== commentId));
		} catch (error) {
			console.error("Failed to delete comment:", error);
		}
	};

	const updateComment = async (text, commentId) => {
		try {
			const updatedComment = await updateCommentAPI(reviewId, commentId, text);
			const updatedComments = backendComments.map(comment => 
				comment._id === commentId ? updatedComment : comment
			);
			setBackendComments(updatedComments);
		} catch (error) {
			console.error("Failed to update comment:", error);
		}
	};
	
	useEffect(() => {
		const fetchComments = async () => {
			try {
				console.log('Fetching comments for review:', reviewId); // Debug
				const data = await getComments(reviewId);
				console.log('Comments fetched:', data); // Debug
				setBackendComments(data);
				setLoading(false);
			} catch (error) {
				console.error("Failed to fetch comments:", error);
				setLoading(false);
			}
		};

		fetchComments();
		
		const interval = setInterval(fetchComments, 5000);
		
		return () => clearInterval(interval);
	}, [reviewId]);
	
	if (loading) {
		return <div>Loading comments...</div>;
	}
	
	return (
		<div className="comments">
			<h3 className="comments-title">Comments</h3>
			<CommentForm submitLabel="Post" handleSubmit={addComment} />
			<div className="comments-container">
				{rootComments.map(rootComment => (
					<Comment
						key={rootComment._id}
						comment={rootComment}
						replies={getReplies(rootComment._id)}
						currentUserId={currentUserId}
						addComment={addComment}
						deleteComment={deleteComment}
						updateComment={updateComment}
					/>
				))}
			</div>
		</div>
	);
};

export default Comments;