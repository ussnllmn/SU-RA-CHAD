import dotenv from "dotenv";
dotenv.config();

export const load = async () => {
  let envs = [];
  console.log("envssadasd");
  process.env.TOKEN && envs.push(process.env.TOKEN);
  process.env.CLIENT_ID && envs.push(process.env.CLIENT_ID);
  process.env.CHANNEL_ID && envs.push(process.env.CHANNEL_ID);
  console.log(envs);
  return {
    envs: { TOKEN: process.env.TOKEN, CLIENT_ID: process.env.CLIENT_ID, CHANNEL_ID: process.env.CHANNEL_ID },
  };
};
