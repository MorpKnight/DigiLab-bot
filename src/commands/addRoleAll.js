"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRoleAll = void 0;
const discord_js_1 = require("discord.js");
exports.addRoleAll = {
    name: "addroleall",
    description: "Add role to all member",
    type: discord_js_1.ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        const members = await interaction.guild?.members.fetch();
        const role = interaction.guild?.roles.cache.find(r => r.name === "Praktikan");
        const exceptRole = interaction.guild?.roles.cache.find(r => r.name === "Asisten");
        members?.forEach(member => {
            if (!member.roles.cache.has(exceptRole?.id) && !member.roles.cache.has(role?.id)) {
                member.roles.add(role);
                console.log(`Add role to ${member.user.username}`);
            }
        });
        console.log("Done");
    }
};
