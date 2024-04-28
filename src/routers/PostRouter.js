const express = require("express");
const router = express.Router();
const PostController = require("../Controllers/PostController");

router.post("/", PostController.createPostController);
router.get("/", PostController.getAllPostController);
router.get("/:id", PostController.getPostByIdController);
router.put("/:id", PostController.updatePostController);
router.delete("/:id", PostController.deletePostController);

module.exports = router;
