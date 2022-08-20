import { Client, GatewayIntentBits } from "discord.js";
import { action } from "$lib/command.js";
import dotenv from "dotenv";
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
dotenv.config();

export const POST = async () => {
  try {
    if (!client.user) {
      console.log("Login to discord");
      client.on("ready", async () => {
        console.log(`Logged in as ${client.user.tag}!`);
      });
      client.on("interactionCreate", async (interaction) => {
        if (!interaction.isChatInputCommand()) return;
        action(interaction);
      });
    } else {
      console.log("Already login");
    }
    await client.login(process.env.TOKEN);
  } catch (e) {
    console.log(e);
  }
};
