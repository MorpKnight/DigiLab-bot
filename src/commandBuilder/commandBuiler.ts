import { CommandInteraction, ChatInputApplicationCommandData, Client } from 'discord.js';

export interface Command extends ChatInputApplicationCommandData {
    run: (client: Client, interaction: CommandInteraction) => void;
}

export interface CommandOwnerOnly extends Command {
    ownerOnly: boolean;
}