"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerMiddleware = exports.AuthMiddleware = void 0;
var isAutheticated = true;
var isManager = false;
function AuthMiddleware(req, res, next) {
    if (isAutheticated) {
        next();
    }
    else {
        res.status(403).json({ message: "Forbidden" });
    }
}
exports.AuthMiddleware = AuthMiddleware;
function ManagerMiddleware(req, res, next) {
    if (isManager) {
        next();
    }
    else {
        res.status(405).json({ message: "Not Allowed" });
    }
}
exports.ManagerMiddleware = ManagerMiddleware;
