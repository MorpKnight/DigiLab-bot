import { Client, CommandInteraction, ApplicationCommandType } from "discord.js";
import { Command } from "../commandBuilder/commandBuiler";

export const printInputGiven: Command = {
    name: "printinputgiven",
    description: "Print input given",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "input",
            description: "Input",
            type: 3,
            required: true
        }
    ],

    run: async (client: Client, interaction: CommandInteraction) => {
        const input = interaction.options.get("input")?.value as string;
        interaction.reply(`Input given: ${input}`);
    }
}