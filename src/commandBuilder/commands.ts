import { addRoleAll } from "../commands/addRoleAll";
import { ping } from "../commands/ping";
import { Command } from "./commandBuiler";

export const Commands: Command[] = [addRoleAll, ping]