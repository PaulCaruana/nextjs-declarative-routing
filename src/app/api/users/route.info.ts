import { z } from "zod";

export const Route = {
  name: "Users",
  params: z.object({
  })
};

export const GET = {
  result: z.object({}),
};
