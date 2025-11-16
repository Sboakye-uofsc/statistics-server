// API helper functions for comments
const API_BASE_URL = 'http://localhost:3001/api';

//HUGE SHOOT OUT TO this YouTube Channel Monsterlessons Academy for helping

export const getComments = async (reviewId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/Review/${reviewId}/comments`);
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
};

export const createComment = async (reviewId, text, parentId = null, userId, username) => {
  try {
    const response = await fetch(`${API_BASE_URL}/Review/${reviewId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        body: text,
        parentId: parentId,
        userId: userId,
        username: username
      }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create comment');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error creating comment:', error);
    throw error;
  }
};

export const updateComment = async (reviewId, commentId, text) => {
  try {
    const response = await fetch(`${API_BASE_URL}/Review/${reviewId}/comments/${commentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        body: text
      }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to update comment');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error updating comment:', error);
    throw error;
  }
};

export const deleteComment = async (reviewId, commentId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/Review/${reviewId}/comments/${commentId}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Failed to delete comment');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error deleting comment:', error);
    throw error;
  }
};