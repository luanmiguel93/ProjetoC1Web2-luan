"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var express_1 = require("express");
var AlunosRoutes_1 = require("./routes/AlunosRoutes");
var StaticRoutes_1 = require("./routes/StaticRoutes");
//dotenv ambiente
dotenv_1.default.config({
    path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env",
});
//dotenv
var port = Number(process.env.PORT);
var app = (0, express_1.default)();
//publico
app.use(express_1.default.json());
app.use("/public", express_1.default.static("".concat(__dirname, "/public")));
//rotas
app.use(AlunosRoutes_1.default);
app.use(StaticRoutes_1.default);
//status server
app.listen(port, function () {
    console.log("Servidor funcionando na porta ".concat(port));
});
