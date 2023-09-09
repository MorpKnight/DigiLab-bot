import { Client, Events } from "discord.js";
import { Commands } from "../commandBuilder/commands";

export default (client: Client) => {
    client.once(Events.ClientReady, async () => {
        console.log(`Logged in as ${client.user?.tag}!`);
        
        await client.application?.commands.set(Commands);
    })
}