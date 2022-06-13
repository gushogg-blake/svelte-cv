<script>
import "$css/app.scss";
import {goto} from "$app/navigation";
import {page} from "$app/stores";
import {name} from "../config";

function keydown(e) {
	if (e.key === "Escape" && $page.url.pathname !== "/") {
		goto("/");
	}
}
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<svelte:window on:keydown={keydown}/>

<slot/>
