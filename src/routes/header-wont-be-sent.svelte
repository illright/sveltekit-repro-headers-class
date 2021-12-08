<script lang="ts" context="module">
  export { sendWithHeadersClass as load } from '$lib/send-with-headers-class';
</script>

<script lang="ts">
  export let headers: string;
</script>

Headers:
<pre>{headers}</pre>
