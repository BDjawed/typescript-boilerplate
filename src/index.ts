import { config } from "dotenv";
config();
const hello = process.env["HELLO"];
console.log(hello);
console.log(process.env["HOST"]);
console.log(process.env["PORT"]);
