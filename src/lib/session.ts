import { cookies } from "next/headers";
import "server-only";

export async function createSession(token: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  await cookies().set("refreshToken", token, {
    httpOnly: true,
    secure: false,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function createAccessTokenSession(token: string) {
  const expiresAt = new Date(Date.now() + 1 * 1 * 15 * 60 * 1000); // 15 m

  await cookies().set("accessToken", token, {
    httpOnly: true,
    secure: false,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}
