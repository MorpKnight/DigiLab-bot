import { Client, CommandInteraction, ApplicationCommandType } from "discord.js";
import { Command } from "../commandBuilder/commandBuiler";

export const addRoleAll: Command = {
    name: "addroleall",
    description: "Add role to all member",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const members = await interaction.guild?.members.fetch();
        const role = interaction.guild?.roles.cache.find(r => r.name === "Praktikan");
        const exceptRole = interaction.guild?.roles.cache.find(r => r.name === "Asisten");
        members?.forEach(member => {
            if(!member.roles.cache.has(exceptRole?.id!) && !member.roles.cache.has(role?.id!)){
                member.roles.add(role!);
                console.log(`Add role to ${member.user.username}`);
            }
            
        });

        console.log("Done");
        
    }
}