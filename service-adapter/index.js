"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var ip_1 = require("ip");
dotenv.config();
console.log("here", ip_1["default"].address());
