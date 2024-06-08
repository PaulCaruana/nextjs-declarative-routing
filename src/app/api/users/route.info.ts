import { z } from "zod";
import { userSchema } from "@/model/user";

export const Route = {
  name: "Users",
  params: z.object({}),
};

export const GET = {
  result: z.array(userSchema),
};
export const POST = {
  body: userSchema,
  result: userSchema,
};
