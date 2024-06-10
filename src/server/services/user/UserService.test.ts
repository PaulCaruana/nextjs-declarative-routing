describe("UserService", () => {
  it("getData", async () => {
    expect(1).toBe(1);
  });
});

/*
import { DB } from "@/server/db/drizzleOrm"; // Make sure to adjust this import path according to your project structure
import { DataAccessServiceDrizzle } from "./DataAccessServiceDrizzle"; // Adjust the import path accordingly
import { BetterSQLite3Database, drizzle } from "drizzle-orm/better-sqlite3";
import MemoryDatabase from "better-sqlite3-memory";
import { createSchema } from "../schema"; // Import your schema creation function

let db: DB;
let service: DataAccessServiceDrizzle<any, any>;

beforeEach(() => {
  const memoryDb = new MemoryDatabase();
  db = drizzle(memoryDb, { schema: createSchema() });
  service = new DataAccessServiceDrizzle(db, createSchema().yourTable); // Replace yourTable with the actual table name from your schema
});

afterEach(() => {
  db.destroy();
});

test("fetchAll returns an empty array when there are no records", async () => {
  const result = await service.fetchAll();
  expect(result).toEqual([]);
});

// Write more tests for other methods in your DataAccessServiceDrizzle class here...
*/
