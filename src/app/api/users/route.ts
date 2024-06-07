import {NextRequest, NextResponse} from "next/server";
import {userService} from "@/server/services/serviceContainer";
import {User} from "@/model/user";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
   return NextResponse.json(await userService.fetchAll());
}

export async function POST(
  req: NextRequest,
  { user }: { user: User }
) {
   return NextResponse.json(await userService.create(user));
}
