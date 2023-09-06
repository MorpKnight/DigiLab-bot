import { Client, Events } from "discord.js";

export default (client: Client) => {
    client.on(Events.GuildMemberAdd, async (member) => {
        const message: string = `Selamat datang di ${client.guilds.cache.get("899279766832689212")?.name}\nJangan lupa ganti username sesuai SIAKNG ya!\nTerima kasih 👌`;
        member.send(message);
    })
}