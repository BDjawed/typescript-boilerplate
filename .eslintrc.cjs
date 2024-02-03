module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	root: true,
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"plugin:import/recommended",
		"prettier",
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs,ts,mts,cts,jsx,tsx}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["./tsconfig.json"],
	},
	plugins: ["@typescript-eslint"],
	rules: {
		//indent: ["error", "tab"],
		//"linebreak-style": ["error", "unix"],
		//quotes: ["error", "double"],
		//semi: ["error", "always"],
		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/consistent-type-definitions": ["error", "type"],
		"@typescript-eslint/no-use-before-define": "error",
	},
	settings: {
		"import/resolver": {
			node: {
				extensions: [".vue", ".js", ".jsx", ".cjs", ".mjs", ".d.ts", ".ts"],
			},
		},
	},
};
