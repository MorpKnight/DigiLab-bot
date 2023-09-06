import { CommandInteraction, Events, Client, Interaction } from 'discord.js';
import { Commands } from '../commandBuilder/commands';

export default (client: Client) => {
    client.on(Events.InteractionCreate, async (interaction: Interaction) => {
        if(interaction.isCommand() || interaction.isContextMenuCommand()){
            await handleSlashCommand(client, interaction);
        };
    });
};

const handleSlashCommand = async (client: Client, interaction: CommandInteraction) => {
    const slashCommand = Commands.find(c => c.name === interaction.commandName);

    if(!slashCommand){
        interaction.followUp({
            content: `An error has occured: Command not found.`,
            ephemeral: true
        })
        return;
    }

    await interaction.deferReply()
    slashCommand.run(client, interaction);
}