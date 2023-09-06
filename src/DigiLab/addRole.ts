import { Client, Events } from 'discord.js';

export default (client: Client) => {
    client.on(Events.MessageReactionAdd, async (reaction, user) => {
        if(user.id === client.user?.id) return;

        if(reaction.message.id === "1148819664105902130"){
            reaction.message.react("🔵");
            if(reaction.emoji.name === "🔵"){
                const role = reaction.message.guild?.roles.cache.find(r => r.name === "Praktikan");
                const member = reaction.message.guild?.members.cache.find(m => m.id === user.id);
                member?.roles.add(role!);
            };
        };
    });
};