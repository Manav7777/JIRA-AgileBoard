require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const indexRouter = require('./controller/index');
const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
indexRouter.use(cookieParser());

app.use(cors());

app.use('/api', indexRouter);

// Handling Errors
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  console.log('error',err.statusCode),
  res.status(err.statusCode).json({
    message: err.message,
  });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
module.exports = app;
