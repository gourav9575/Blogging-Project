const CommentService = require("../services/CommentService");

exports.createCommentController = async (req, res) => {
  try {
    if (!req.body.postId || !req.body.body || !req.body.author) {
      return res.status(400).json({ message: "Missing fields" });
    }
    const comment = await CommentService.createCommentService(req.body);
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.getCommentByPostIdController = async (req, res) => {
  try {
    if (!req.params.postId) {
      return res.status(400).json({ message: "postId is required" });
    }
    const comment = await CommentService.getCommentByPostIdService(req.params.postId);

    res.status(200).json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteCommentController = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ message: "id is required" });
    }
    const deletedComment = await CommentService.deleteCommentService(req.params.id);
    if (!deletedComment) {
      return res.status(404).json({ message: "Commentno found" });
    }
    res.status(200).json({ message: "Deleted succesfully!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
