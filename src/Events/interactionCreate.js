"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const commands_1 = require("../commandBuilder/commands");
exports.default = (client) => {
    client.on(discord_js_1.Events.InteractionCreate, async (interaction) => {
        if (interaction.isCommand() || interaction.isContextMenuCommand()) {
            await handleSlashCommand(client, interaction);
        }
        ;
    });
};
const handleSlashCommand = async (client, interaction) => {
    const allCommand = [...commands_1.Commands, ...commands_1.CommandsOwner];
    // const slashCommand = Commands.find(c => c.name === interaction.commandName);
    const slashCommand = allCommand.find(c => c.name === interaction.commandName);
    if (!slashCommand) {
        interaction.followUp({
            content: `An error has occured: Command not found.`,
            ephemeral: true
        });
        return;
    }
    await interaction.deferReply();
    slashCommand.run(client, interaction);
};
