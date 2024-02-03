import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [tsconfigPaths()],
	test: {
		include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		exclude: ["**/node_modules/**", "**/dist/**", "**/coverage/**"],
		coverage: {
			include: ["src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
			exclude: [
				"coverage/**",
				"dist/**",
				"**/[.]**",
				"packages/*/test?(s)/**",
				"**/*.d.ts",
				"**/virtual:*",
				"**/__x00__*",
				"**/\x00*",
				"cypress/**",
				"test?(s)/**",
				"test?(-*).?(c|m)[jt]s?(x)",
				"**/*{.,-}{test,spec}.?(c|m)[jt]s?(x)",
				"**/__tests__/**",
				"**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
				"**/vitest.{workspace,projects}.[jt]s?(on)",
				"**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}",
			],
			provider: "istanbul",
			enabled: true,
			reporter: ["text", "json", "html"],
			all: true,
			clean: true,
			cleanOnRerun: true,
			reportsDirectory: "./coverage",
			reportOnFailure: true,
		},
	},
});
