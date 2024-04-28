const Post = require("../modals/PostModal");

exports.createPostService = async (postData) => {
  try {
    return await Post.create(postData);
  } catch (err) {
    console.log("Error in createPostService", err);
    throw new Error("Failed to create post");
  }
};
exports.getAllPostService = async () => {
  try {
    return await Post.find();
  } catch (err) {
    console.log("Error in getAllPostService", err);
    throw new Error("Failed to get posts");
  }
};
exports.getPostByIDService = async (postId) => {
  try {
    return await Post.findById(postId);
  } catch (err) {
    console.log("Error in getPostByIDService: ", err);
    throw new Error(`Post with id ${postId} not found`);
  }
};
exports.updatePostService = async (postId, postData) => {
  try {
    return await Post.findByIdAndUpdate(postId, postData, { new: true });
  } catch (err) {
    console.log("Error in updatePostService:", err);
    throw new Error("Failed to update the post");
  }
};
exports.deletePostService = async (postId) => {
  try {
    return await Post.findByIdAndDelete(postId);
  } catch (err) {
    console.error("Error in deletePostService: ", err);
    throw new Error("Failed to delete the post");
  }
};
