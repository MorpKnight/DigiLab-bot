import { addRoleAll } from "../commands/addRoleAll";
import { changePresence } from "../commands/changePresence";
import { ping } from "../commands/ping";
import { printCommand } from "../commands/printCommand";
import { Command, CommandOwnerOnly } from "./commandBuiler";

export const Commands: Command[] = [addRoleAll, ping, printCommand]
export const CommandsOwner: CommandOwnerOnly[] = [changePresence]