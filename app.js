const express = require("express");
const PostRouter = require("./src/routers/PostRouter");
const CommentRouter = require("./src/routers/CommentRouter");
const connectDB = require("./src/database/db");
const app = express();
app.use(express.json());
connectDB();
app.use("/posts", PostRouter);
app.use("/comments", CommentRouter);

app.listen(3000, () => {
  console.log(`Server is running on  port 3000`);
});
