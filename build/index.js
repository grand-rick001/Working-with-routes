"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var router_1 = __importDefault(require("./routes/router"));
var app = (0, express_1.default)();
var port = 3000;
app.use((0, morgan_1.default)("common"));
app.use('/', router_1.default);
app.listen(port, function () {
    console.log("Server started at http://localhost:".concat(port));
});
