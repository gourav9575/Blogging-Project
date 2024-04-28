const PostService = require("../services/PostService");

exports.createPostController = async (req, res) => {
  try {
    if (!req.body.title || !req.body.body || !req.body.author) {
      return res.status(400).json({ message: "Missing fields" });
    }
    const post = await PostService.createPostService(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllPostController = async (req, res) => {
  try {
    const posts = await PostService.getAllPostService();
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.getPostByIdController = async (req, res) => {
  try {
    console.log("1111", req.params);
    if (!req.params.id) {
      return res.status(400).json({ message: "id is required" });
    }
    const post = await PostService.getPostByIDService(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.updatePostController = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ message: "id is required" });
    }
    if (!req.body.title && !req.body.body && !req.body.author) {
      return res.status(400).json({ message: "(title,body,author)At one field is reqiured" });
    }
    const updatedPost = await PostService.updatePostService(req.params.id, req.body);
    if (!updatedPost) {
      return res.status(404).json({ message: " Post not found" });
    }
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.deletePostController = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ message: "id is required" });
    }
    const deleted = await PostService.deletePostService(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Post no found" });
    }
    res.status(200).json({ message: "Deleted succesfully!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
