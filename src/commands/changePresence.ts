import { Client, CommandInteraction, ApplicationCommandType } from "discord.js";
import { Command } from "../commandBuilder/commandBuiler";

export const changePresence: Command = {
    name: "changePresence",
    description: "Change presence",
    type: ApplicationCommandType.ChatInput,
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
    run: async (client: Client, interaction: CommandInteraction) => {
        const type = interaction.options.get("type");
        const text = interaction.options.get("text");
        console.log(type?.value);
        console.log(text?.value);
        await interaction.followUp("Done");
    }
}