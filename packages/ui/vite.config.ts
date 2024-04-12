import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import dts from "vite-plugin-dts";
import { copyFile } from "node:fs/promises";
import { peerDependencies } from "./package.json";

export default defineConfig({
	build: {
		lib: {
			entry: {
				index: "src/index.ts",
			},
			formats: ["es", "cjs"],
		},
		rollupOptions: {
			external: Object.keys(peerDependencies ?? {}),
			treeshake: "recommended",
		},
		cssCodeSplit: true,
		sourcemap: true,
		minify: true,
		cssMinify: true,
	},
	plugins: [
		react(),
		vanillaExtractPlugin(),
		dts({
			rollupTypes: true,
			// https://github.com/qmhc/vite-plugin-dts/issues/267
			afterBuild() {
				return copyFile("dist/index.d.ts", "dist/index.d.cts");
			},
		}),
	],
});
