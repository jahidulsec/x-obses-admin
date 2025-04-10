import "server-only";
import { cookies } from "next/headers";

export async function createSession(token: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  await cookies().set("refreshToken", token, {
    httpOnly: true,
    secure: process.env.COOKIE_SECURE === "1",
    expires: expiresAt,
    sameSite: process.env.COOKIE_SECURE === "1" ? "none" : "lax",
    path: "/",
  });
}

export async function deleteSession() {
  await cookies().delete("refreshToken");
}
