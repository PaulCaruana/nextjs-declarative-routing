import {NextRequest, NextResponse} from "next/server";
import {userService} from "@/server/services/serviceContainer";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
   return NextResponse.json(await userService.fetchAll());
}
