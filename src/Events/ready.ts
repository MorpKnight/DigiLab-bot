import { Client, Events } from "discord.js";
import { Commands, CommandsOwner } from "../commandBuilder/commands";

export default (client: Client) => {
    const allCommand = [...Commands, ...CommandsOwner];
    
    client.once(Events.ClientReady, async () => {
        console.log(`Logged in as ${client.user?.tag}!`);

        await client.application?.commands.set(allCommand);
        // await client.application?.commands.set(Commands);
        // await client.application?.commands.set(CommandsOwner);
        
    })
}