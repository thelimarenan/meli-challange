import * as dotenv from "dotenv";
import ServerService from "./src/services/ServerService";
dotenv.config();

const server: ServerService = new ServerService();
const portNumber: string = process.env.APPLICATION_PORT || "8082";
const port: number = parseInt(portNumber, 10);
server.start(port);
