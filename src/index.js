"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
require("dotenv/config");
const interactionCreate_1 = __importDefault(require("./Events/interactionCreate"));
const addRole_1 = __importDefault(require("./DigiLab/addRole"));
const memberJoin_1 = __importDefault(require("./DigiLab/memberJoin"));
const ready_1 = __importDefault(require("./Events/ready"));
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds, discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.GuildMembers, discord_js_1.GatewayIntentBits.GuildMessageReactions,
        discord_js_1.GatewayIntentBits.MessageContent
    ],
    partials: [
        discord_js_1.Partials.Message, discord_js_1.Partials.Channel, discord_js_1.Partials.Reaction
    ]
});
(0, interactionCreate_1.default)(client);
(0, addRole_1.default)(client);
(0, memberJoin_1.default)(client);
(0, ready_1.default)(client);
client.login(process.env.TOKEN);
// client.login(process.env.PROD_TOKEN);
