const express = require("express");
const router = express.Router();
const CommentController = require("../Controllers/CommentController");

router.post("/", CommentController.createCommentController);
router.get("/:postId", CommentController.getCommentByPostIdController);
router.delete("/:id", CommentController.deleteCommentController);

module.exports = router;
