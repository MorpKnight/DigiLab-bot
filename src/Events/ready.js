"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const commands_1 = require("../commandBuilder/commands");
exports.default = (client) => {
    const allCommand = [...commands_1.Commands, ...commands_1.CommandsOwner];
    client.once(discord_js_1.Events.ClientReady, async () => {
        console.log(`Logged in as ${client.user?.tag}!`);
        await client.application?.commands.set(allCommand);
        // await client.application?.commands.set(Commands);
        // await client.application?.commands.set(CommandsOwner);
    });
};
