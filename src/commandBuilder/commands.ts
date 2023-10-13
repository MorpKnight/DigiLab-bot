import { addRoleAll } from "../commands/addRoleAll";
import { ping } from "../commands/ping";
import { printInputGiven } from "../commands/printInputGiven";
import { Command } from "./commandBuiler";

export const Commands: Command[] = [addRoleAll, ping, printInputGiven]