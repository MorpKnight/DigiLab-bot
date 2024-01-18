"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printCommand = void 0;
const discord_js_1 = require("discord.js");
exports.printCommand = {
    name: "print",
    description: "Print",
    type: discord_js_1.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "text",
            description: "Text",
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
        }
    ],
    run: async (client, interaction) => {
        const text = interaction.options.get("text");
        console.log(text?.value);
        await interaction.followUp("Done");
    }
};
