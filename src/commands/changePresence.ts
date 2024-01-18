import { Client, CommandInteraction, ApplicationCommandType, ActivityType} from "discord.js";
import { Command, CommandOwnerOnly } from "../commandBuilder/commandBuiler";

export const changePresence: CommandOwnerOnly = {
    ownerOnly: true,
    name: "presence",
    description: "Change presence",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "type",
            description: "Type",
            type: 3,
            required: true,
            choices: [
                {
                    name: "Playing",
                    value: "PLAYING"
                },
                {
                    name: "Watching",
                    value: "WATCHING"
                },
                {
                    name: "Listening",
                    value: "LISTENING"
                },
                {
                    name: "Streaming",
                    value: "STREAMING"
                }
            ]
        },
        {
            name: "text",
            description: "Text",
            type: 3,
            required: true
        }
    ],
    run: async (client: Client, interaction: CommandInteraction) => {
        if (interaction.user.id !== "385053392059236353") {
            await interaction.followUp("You are not allowed to use this command");
            return;
        }
        const type = interaction.options.get("type")?.value as string;
        const text = interaction.options.get("text")?.value as string;
        let activityType: ActivityType;
        switch (type) {
            case "PLAYING":
                activityType = ActivityType.Playing;
                break;
            case "WATCHING":
                activityType = ActivityType.Watching;
                break;
            case "LISTENING":
                activityType = ActivityType.Listening;
                break;
            case "STREAMING":
                activityType = ActivityType.Streaming;
                break;
            default:
                activityType = ActivityType.Playing;
                break;
        }
        await client.user?.setPresence({
            activities: [{
                name: text,
                type: activityType
            }]
        });
        await interaction.followUp("Done");
    }
}