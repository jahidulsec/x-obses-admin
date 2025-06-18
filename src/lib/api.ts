"use server";

import { cookies as nextCookies } from "next/headers";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

const fetchRefreshToken = async (refreshToken: string | undefined) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/v1/token/admin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken: refreshToken ?? "" }),
    });

    const data = await response.json();
    if (!response.ok) throw data;

    return data.data.accessToken;
  } catch (error) {
    console.error((error as any).message);
    return null;
  }
};

export const fetchWithAuth = async (
  url: string,
  init?: RequestInit,
  cookieStore = nextCookies()
) => {
  const refreshToken = cookieStore.get("refreshToken")?.value;
  let accessToken = ""; // scoped per request

  // Try request with initial empty access token
  let response = await fetch(`${API_BASE_URL}${url}`, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  // If unauthorized, try to refresh
  if (response.status === 401 && refreshToken) {
    const newAccessToken = await fetchRefreshToken(refreshToken);

    if (!newAccessToken) {
      cookieStore.delete("refreshToken");
      throw new Error("User not authenticated");
    }

    accessToken = newAccessToken;

    response = await fetch(`${API_BASE_URL}${url}`, {
      ...init,
      headers: {
        ...init?.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  return response;
};
