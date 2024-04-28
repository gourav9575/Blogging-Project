const Comment = require("../modals/CommentModal");

exports.createCommentService = async (commentData) => {
  try {
    return await Comment.create(commentData);
  } catch (err) {
    console.log("Error in createCommentService", err);
    throw new Error("Failed to create comment");
  }
};
exports.getCommentByPostIdService = async (postId) => {
  try {
    return await Comment.find({ postId });
  } catch (err) {
    console.log("Error in getCommentByPostIdService", err);
    throw new Error("Failed to get comments");
  }
};

exports.deleteCommentService = async (commentId) => {
  try {
    return await Post.findByIdAndDelete(commentId);
  } catch (err) {
    console.error("Error in deleteCommentService: ", err);
    throw new Error("Failed to delete the comment");
  }
};
