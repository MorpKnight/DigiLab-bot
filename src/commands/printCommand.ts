import { Client, CommandInteraction, ApplicationCommandType } from "discord.js";
import { Command } from "../commandBuilder/commandBuiler";

export const printCommand: Command = {
    name: "print",
    description: "Print",
    type: ApplicationCommandType.ChatInput,
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
    run: async (client: Client, interaction: CommandInteraction) => {
        const text = interaction.options.get("text");
        console.log(text?.value);
        await interaction.followUp("Done");
    }
}