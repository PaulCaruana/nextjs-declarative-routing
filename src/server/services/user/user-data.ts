import { User } from "@/model/user";
import { faker } from "@faker-js/faker";

export const generateUsers = (count: number): User[] => {
  const users: User[] = [];

  for (let i = 0; i < count; i++) {
    users.push({
      username: faker.internet.email(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    });
  }
  return users;
};
