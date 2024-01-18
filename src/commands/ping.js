"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ping = void 0;
exports.ping = {
    name: "ping",
    description: "Check bot latency",
    run: async (client, interaction) => {
        const botLatency = client.ws.ping;
        await interaction.followUp(`🏓 Bot latency: \`${botLatency}ms\``);
    }
};
