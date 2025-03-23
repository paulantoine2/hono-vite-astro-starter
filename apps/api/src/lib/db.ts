import { drizzle } from "drizzle-orm/bun-sql";
import * as schema from "@boilerplate/db";

const db = drizzle({
  connection: process.env.DATABASE_URL!,
  schema,
});

export default db;
