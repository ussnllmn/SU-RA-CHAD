import { discord_login } from "./lib/discord.js";

var discord_start = (function () {
  var executed = false;
  return function () {
    if (!executed) {
      executed = true;
      discord_login();
    }
  };
})();

export const handle = async ({ event, resolve }) => {
  discord_start();

  const response = await resolve(event);
  return response;
};
