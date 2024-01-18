"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandsOwner = exports.Commands = void 0;
const addRoleAll_1 = require("../commands/addRoleAll");
const changePresence_1 = require("../commands/changePresence");
const ping_1 = require("../commands/ping");
const printCommand_1 = require("../commands/printCommand");
exports.Commands = [addRoleAll_1.addRoleAll, ping_1.ping, printCommand_1.printCommand];
exports.CommandsOwner = [changePresence_1.changePresence];
