"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePresence = void 0;
const discord_js_1 = require("discord.js");
exports.changePresence = {
    ownerOnly: true,
    name: "presence",
    description: "Change presence",
    type: discord_js_1.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "type",
            description: "Type",
            type: 3,
            required: true,
            choices: [
                {
                    name: "Playing",
                    value: "PLAYING"
                },
                {
                    name: "Watching",
                    value: "WATCHING"
                },
                {
                    name: "Listening",
                    value: "LISTENING"
                },
                {
                    name: "Streaming",
                    value: "STREAMING"
                }
            ]
        },
        {
            name: "text",
            description: "Text",
            type: 3,
            required: true
        }
    ],
    run: async (client, interaction) => {
        if (interaction.user.id !== "385053392059236353") {
            await interaction.followUp("You are not allowed to use this command");
            return;
        }
        const type = interaction.options.get("type")?.value;
        const text = interaction.options.get("text")?.value;
        let activityType;
        switch (type) {
            case "PLAYING":
                activityType = discord_js_1.ActivityType.Playing;
                break;
            case "WATCHING":
                activityType = discord_js_1.ActivityType.Watching;
                break;
            case "LISTENING":
                activityType = discord_js_1.ActivityType.Listening;
                break;
            case "STREAMING":
                activityType = discord_js_1.ActivityType.Streaming;
                break;
            default:
                activityType = discord_js_1.ActivityType.Playing;
                break;
        }
        await client.user?.setPresence({
            activities: [{
                    name: text,
                    type: activityType
                }]
        });
        await interaction.followUp("Done");
    }
};
