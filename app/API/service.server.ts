import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ["info"],
    errorFormat: process?.env?.NODE_ENV === "production" ? "minimal" : "pretty"
});

export default prisma;