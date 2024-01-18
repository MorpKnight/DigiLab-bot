"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = (client) => {
    client.on(discord_js_1.Events.GuildMemberAdd, async (member) => {
        const message = `Selamat datang di ${client.guilds.cache.get("1147877435484942346")?.name}\nJangan lupa ganti username sesuai SIAKNG ya!\nTerima kasih 👌`;
        member.send(message);
    });
};
