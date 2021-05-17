const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const router = require("./routes/apiRoutes")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/htmlRoutes"));
app.use(router);

app.listen(PORT,function(){ 
    console.log(`App listening on Port ${PORT}`);
});