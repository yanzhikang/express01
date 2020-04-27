/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-14 18:16:41
 * @LastEditTime: 2019-09-04 01:00:44
 * @LastEditors: Please set LastEditors
 */
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("respond with a resource of get");
});

router.post("/", function (req, res, next) {
    res.send("respond with a resource of post");
});

router.get("/getUserByName", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    var obj = {name:'tyk',age:24}
    res.send(JSON.stringify(obj));
});

router.get("/getUser1", function (req, res, next) {
    res.send("respond with a resource of get1");
});
router.get("/getUser2", function (req, res, next) {
    res.send("respond with a resource of get2");
});
router.get("/getUser3", function (req, res, next) {
    res.send("respond with a resource of get3");
});
router.get("/getUser4", function (req, res, next) {
    res.send("respond with a resource of get4");
});
router.get("/getUser5", function (req, res, next) {
    res.send("respond with a resource of get5");
});

module.exports = router;
