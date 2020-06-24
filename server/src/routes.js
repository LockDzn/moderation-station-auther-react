"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var UserController_1 = __importDefault(require("./controllers/UserController"));
var userController = new UserController_1.default();
var routes = express_1.default.Router();
routes.get('/user', userController.index);
routes.post('/user', userController.create);
routes.delete('/user', userController.delete);
exports.default = routes;
