import { CommandInteraction, Events, Client, Interaction } from 'discord.js';
import { Commands, CommandsOwner } from '../commandBuilder/commands';

export default (client: Client) => {
    client.on(Events.InteractionCreate, async (interaction: Interaction) => {
        if(interaction.isCommand() || interaction.isContextMenuCommand()){
            await handleSlashCommand(client, interaction);
        };
    });
};

const handleSlashCommand = async (client: Client, interaction: CommandInteraction) => {
    const allCommand = [...Commands, ...CommandsOwner];
    // const slashCommand = Commands.find(c => c.name === interaction.commandName);
    const slashCommand = allCommand.find(c => c.name === interaction.commandName);

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