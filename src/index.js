const express = require("express");
const app = express();

//setting view engine to ejs
app.set("view engine", "ejs");
app.set("views", "./src/views");

//routes
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
