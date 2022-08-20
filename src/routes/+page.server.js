import dotenv from "dotenv";
dotenv.config();

export const load = async () => {
  return {
    envs: { TOKEN: process.env.TOKEN, CLIENT_ID: process.env.CLIENT_ID, CHANNEL_ID: process.env.CHANNEL_ID },
  };
};
