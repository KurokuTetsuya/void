import Command from "../../classes/Command";
import type { Message } from "whatsapp-web.js";
import type VoidClient from "../../classes/VoidClient";

export default class PingCommand extends Command {
    public constructor(readonly client: VoidClient) {
        super(client, "ping", { content: "Ping pong!" }, { category: "general" });
    }
    public exec(msg: Message): void {
        msg.reply("Pong!");
    }
}