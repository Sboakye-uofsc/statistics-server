import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import { getComments, createComment } from "./api";
import "./../css/Comments.css";

//HUGE SHOOT OUT TO this YouTube Channel Monsterlessons Academy for helping

const Comment = ({ comment, replies, currentUserId, addComment }) => {
	const [showReplyForm, setShowReplyForm] = useState(false);
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
					<button 
						className="comment-reply-button"
						onClick={() => setShowReplyForm(!showReplyForm)}
					>
						Reply
					</button>
				)}
			</div>
			{showReplyForm && (
				<CommentForm 
					submitLabel="Reply"
					handleSubmit={(text) => {
						addComment(text, comment.id);
						setShowReplyForm(false);
					}}
				/>
			)}
			{replies.length > 0 && (
				<div className="replies">
					{replies.map(reply => (
						<Comment
							key={reply.id}
							comment={reply}
							replies={[]}
							currentUserId={currentUserId}
							addComment={addComment}
						/>
					))}
				</div>
			)}
		</div>
	);
};

const Comments = ({ reviewId, currentUserId, currentUsername = "Anonymous" }) => {
	const [backendComments, setBackendComments] = useState([]);
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
			const comment = await createComment(reviewId, text, parentId, currentUserId, currentUsername);
			setBackendComments([comment, ...backendComments]);
		} catch (error) {
			console.error("Failed to add comment:", error);
		}
	};
	
	useEffect(() => {
		const fetchComments = async () => {
			setLoading(true);
			const data = await getComments(reviewId);
			setBackendComments(data);
			setLoading(false);
		};
		
		fetchComments();
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
						key={rootComment.id}
						comment={rootComment}
						replies={getReplies(rootComment.id)}
						currentUserId={currentUserId}
						addComment={addComment}
					/>
				))}
			</div>
		</div>
	);
};

export default Comments;