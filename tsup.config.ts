import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["cjs", "esm"],
	clean: true,
	dts: { banner: "export {};\n" }, // The banner should be keeped to typescript consider the file as a module
	sourcemap: "inline",
	treeshake: true,
});
