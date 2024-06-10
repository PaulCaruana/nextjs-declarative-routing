import "server-only";

import { BetterSQLite3Database, drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

import * as schema from "./sqliteSchemas";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";

export const loadDB = (): DB => {
  const dbName =
    process.env.DB_NAME || process.env.JEST_WORKER_ID
      ? ":memory:"
      : "sqlite.db";
  const sqlite = new Database(dbName);
  const db = drizzle(sqlite, { schema });
  migrate(db, { migrationsFolder: "drizzle" });
  return db;
};

export type DB = BetterSQLite3Database<typeof schema>;
