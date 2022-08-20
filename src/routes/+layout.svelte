<script>
  import "../app.css";
  import axios from "axios";
  import { onMount } from "svelte";
  let status = "panding";
  onMount(async () => {
    // await axios.post(`/discord_start`).then(function (response) {
    //   console.log(response);
    //   status = "complete";
    // });
  });
</script>

<h1 class="text-center text-3xl {status === 'complete' ? 'bg-green-500' : 'bg-red-500'}">{status}</h1>
<slot />
