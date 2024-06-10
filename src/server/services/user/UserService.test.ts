import { UserServiceDrizzle } from "@/server/services/user/UserServiceDrizzle";
import { UserService } from "@/server/services/user/UserService";
import { loadDB } from "@/server/db/drizzleOrm";
import { generateUsers } from "@/server/services/user/user-data";

let userService: UserService;
beforeEach(async () => {
  userService = new UserServiceDrizzle({ db: loadDB() });
  await userService.createMany(generateUsers(10));
});

afterEach(() => {});

describe("UserService", () => {
  it("getData", async () => {
    const result = await userService.fetchAll();
    console.log("result = ", result);

    expect(1).toBe(1);
  });
  it("getData2", async () => {
    const result = await userService.fetchAll();
    console.log("result = ", result);

    expect(1).toBe(1);
  });
});

/*
test("fetchAll returns an empty array when there are no records", async () => {
  const result = await service.fetchAll();
  expect(result).toEqual([]);
});

// Write more tests for other methods in your DataAccessServiceDrizzle class here...
*/
