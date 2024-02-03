import { describe, it, expect } from "vitest";

describe("hello work test", () => {
	it("should pass the hello work test", () => {
		const result = "hello work";
		expect(result).toBe("hello work");
	});
});
