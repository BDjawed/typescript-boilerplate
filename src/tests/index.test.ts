import { describe, it, expect } from "vitest";
import { config } from "dotenv";
config();

describe("hello work test", () => {
	it("Should fetch .env variables", () => {
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

	it("should pass the hello work test", () => {
		const result = "hello work";
		expect(result).toBe("hello work");
	});
});
