import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const refreshToken = await cookies().get("refreshToken")?.value;

  if (!refreshToken) redirect("/login");

  redirect("/dashboard");
}
