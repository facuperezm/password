import { type NextRequest } from "next/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("jwt");

  cookies().set("sessions", query as string, {
    expires: new Date(Date.now() + 100000 * 1000),
    httpOnly: true,
  });

  return redirect("/dashboard");
}
