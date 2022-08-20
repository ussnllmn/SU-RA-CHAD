<script>
  import "../app.css";
  import axios from "axios";
  import { onMount } from "svelte";

  var discord_start = (function () {
    var executed = false;
    return async function () {
      if (!executed) {
        executed = true;
        await axios.post(`/discord_start`).then(async function (response) {
          console.log("nice", response);
        });
      }
    };
  })();
  onMount(async () => {
    console.log("staet");
    discord_start();
  });
</script>

<slot />
