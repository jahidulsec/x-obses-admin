"use server";

import { cookies } from "next/headers";
import { createAccessTokenSession } from "./session";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const fetchRefreshToken = async () => {
  try {
    // get refresh token
    const refreshToken = await cookies().get("refreshToken")?.value;

    console.log("r", refreshToken);

    const response = await fetch(`${API_BASE_URL}/api/auth/v1/token/admin`, {
      method: "POST",
      headers: {
        "Content-Type": "applicaiton/json",
      },
      body: JSON.stringify({ refreshToken: refreshToken }),
    });

    const data = await response.json();

    if (!response.ok) throw data;

    return data.data.accessToken;
  } catch (error) {
    console.log((error as any).message);
    await cookies().delete("refreshToken");
    await cookies().delete("accessToken");
    return null;
  }
};

export const fetchWithAuth = async (url: string, init?: RequestInit) => {
  // get accessToken
  const accessToken = await cookies().get("accessToken")?.value;

  console.log("a", accessToken);

  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${accessToken ?? ""}`,
    },
  });

  if (response.status === 401) {
    console.warn("Access token expired! Attempting to refresh...");
    const accessToken = await fetchRefreshToken();

    if (!accessToken) {
      return Promise.reject("User not authenticated");
    }

    await createAccessTokenSession(accessToken as string);

    return await fetch(`${API_BASE_URL}${url}`, {
      ...init,
      headers: {
        ...init?.headers,
        Authorization: `Bearer ${accessToken ?? ""}`,
      },
    });
  }

  return response;
};
