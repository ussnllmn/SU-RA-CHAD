const { REST, Routes } = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();

const commands = [
  {
    name: "ตบ",
    description: "สุรชาติจะสัมผัสหน้าคุณอย่างอ่อนโยน",
  },
  {
    name: "ปลอบ",
    description: "สุรชาติจะเข้ามาปลอบประโลมคุณ",
  },
  {
    name: "หงี่",
    description: "สุรชาติอยากให้คุณหันหลังมา",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID, process.env.CHANNEL_ID), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
