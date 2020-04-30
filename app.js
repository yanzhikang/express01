/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-14 18:16:41
 * @LastEditTime: 2019-09-04 00:57:57
 * @LastEditors: Please set LastEditors
 */
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	console.log(new Date().getTime());
    next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500).send("Something broke!");
});


// error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get("env") === "development" ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render("error");
// });


module.exports = app;
