const express = require("express");
const app = express();
const userRouter = require("./routers/userRouter");
const modalRouter = require("./routers/modalRouter");
const cors = require("cors");
require("dotenv").config();

const port = 5000 ;

// to allow your frontend
app.use(cors({ origin: [["http://localhost:3000", "https://threed-visualizer-rehnuma.onrender.com"]] }));
app.use(express.json());

//middleware
app.use("/user", userRouter);
app.use("/modal", modalRouter);
app.use(express.static("./static/uploads"));

//to start server
app.listen(port, () => {
  console.log(`server started at port no ${port}`);
});
