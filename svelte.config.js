import path from "path";
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

export default {
	kit: {
		adapter: adapter(),
		
		browser: {
			router: true,
		},
		
		trailingSlash: "always",
		
		vite: {
			resolve: {
				alias: {
					$src: path.resolve("./src"),
					$utils: path.resolve("./src/utils"),
					$components: path.resolve("./src/components"),
					$css: path.resolve("./src/css"),
				},
			},
		},
	},
	
	preprocess: [
		preprocess(),
	],
};
