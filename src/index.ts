import { Client, GatewayIntentBits, Partials } from 'discord.js';
import 'dotenv/config';
import interactionCreate from './Events/interactionCreate';
import addRole from './DigiLab/addRole';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent
    ],
    partials: [
        Partials.Message, Partials.Channel, Partials.Reaction
    ]
});

interactionCreate(client);
addRole(client);

client.login(process.env.TOKEN);