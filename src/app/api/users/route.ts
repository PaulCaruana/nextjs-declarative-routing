import { NextRequest, NextResponse } from "next/server";
import { userService } from "@/server/services/serviceContainer";
import { User } from "@/model/user";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  return NextResponse.json(await userService.fetchAll());
}

export async function POST(req: NextRequest) {
  // Extract the JSON body of the request
  const userData: User = await req.json();

  try {
    // Use your service to create a new user with the provided data
    const createdUser = await userService.create(userData);

    // Return the newly created user as JSON, along with an HTTP status code of 201 (Created)
    return NextResponse.json(createdUser, { status: 201 });
  } catch (error) {
    // If there's an error while creating the user, log it and return a JSON response containing the error message, along with an HTTP status code of 400 (Bad Request)
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 400 },
    );
  }
}
