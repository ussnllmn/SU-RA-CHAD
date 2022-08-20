import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
dotenv.config();
export const load = async ({ locals }) => {
  client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "ตบ") {
      await interaction.reply("สุรชาติเก็บแว่นให้คุณ");
    }
    if (interaction.commandName === "ปลอบ") {
      await interaction.reply("สุรชาติสัมผัสหลังคุณอย่างอ่อนโยน");
    }
    if (interaction.commandName === "หงี่") {
      await interaction.reply("สุรชาติกำลังทำบางอย่างด้านหลังคุณ");
    }
  });

  client.login(process.env.TOKEN);
  return {
    status: 200,
  };
};

// export const POST = async ({ request, locals }) => {
//   const form = await request.formData();

//   await api("POST", `todos/${locals.userid}`, {
//     text: form.get("text"),
//   });
// };
