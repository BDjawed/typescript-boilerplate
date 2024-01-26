import { config } from "dotenv";

config();

const hello = process.env["HELLO"];

console.log(hello);
