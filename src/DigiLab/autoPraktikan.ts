import { Client, Events } from "discord.js";

export default (client: Client) => {
    // get member list
    const memberList = client.guilds.cache.get("899279766832689212")?.members.cache;
    const role = client.guilds.cache.get("899279766832689212")?.roles.cache.find(r => r.name === "Praktikan");
    // assign memberList role "Praktikan"
    memberList?.forEach(member => {
        member.roles.add(role!);
    });
};