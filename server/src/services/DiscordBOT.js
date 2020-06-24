"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = __importDefault(require("discord.js"));
var config_1 = __importDefault(require("../config"));
var Client = new discord_js_1.default.Client();
Client.login(config_1.default.BOT_TOKEN);
exports.default = Client;