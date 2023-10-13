import { Client, CommandInteraction, ApplicationCommandType } from "discord.js";
import { Command } from "../commandBuilder/commandBuiler";

export const ping: Command = {
    name: "ping",
    description: "Check bot latency",
    run: async (client: Client, interaction: CommandInteraction) => {
        const botLatency = client.ws.ping;
        await interaction.followUp(`🏓 Bot latency: \`${botLatency}ms\``);
    }
} 