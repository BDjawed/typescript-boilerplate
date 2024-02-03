import { config } from "dotenv";
config();

import { z } from "zod";
import { parse } from "@zodyac/env";

const EnvSchema = z.object({
	HELLO: z.string(),
	HOST: z.string(),
	PORT: z.string(),
});

export const hello = parse(EnvSchema, {
	path: ".env",
	ignoreProcessEnv: true,
});

console.log(hello);
