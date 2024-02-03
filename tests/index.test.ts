import { config } from "dotenv";
config();

import { describe, it, expect } from "vitest";

import { hello } from "../src/index";

describe("hello world test", () => {
	it("Should pass the .env variables", () => {
		const envVar = {
			host: process.env["HOST"],
			port: process.env["PORT"],
			msg: process.env["HELLO"],
		};
		expect(envVar).toStrictEqual({
			host: "0.0.0.0",
			port: "3000",
			msg: "Hello World!",
		});
	});

	it("Should pass the hello world test", () => {
		const expected = { HELLO: "Hello World!", HOST: "0.0.0.0", PORT: "3000" };
		expect(hello).toStrictEqual(expected);
	});
});
