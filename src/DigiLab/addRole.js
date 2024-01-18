"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
// add message id here
const messageID = ["1148819664105902130"];
exports.default = (client) => {
    client.on(discord_js_1.Events.MessageReactionAdd, async (reaction, user) => {
        if (user.id === client.user?.id)
            return;
        messageID.forEach((id) => {
            if (reaction.message.id === id) {
                reaction.message.react("🔵");
                if (reaction.emoji.name === "🔵") {
                    const role = reaction.message.guild?.roles.cache.find(r => r.name === "Praktikan");
                    const member = reaction.message.guild?.members.cache.find(m => m.id === user.id);
                    member?.roles.add(role);
                }
            }
        });
    });
};
