"use server";

import { cookies } from "next/headers";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
let accessToken = "";

const fetchRefreshToken = async () => {
  try {
    // get refresh token
    const refreshToken = await cookies().get("refreshToken")?.value;

    const response = await fetch(`${API_BASE_URL}/api/auth/v1/token/admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken: refreshToken ?? "" }),
    });

    const data = await response.json();

    if (!response.ok) throw data;

    return data.data.accessToken;
  } catch (error) {
    console.log((error as any).message);
    await cookies().delete("refreshToken");
    return null;
  }
};

export const fetchWithAuth = async (url: string, init?: RequestInit) => {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${accessToken ?? " "}`,
    },
  });

  if (response.status === 401) {
    console.warn("Access token expired! Attempting to refresh...");
    const newAccessToken = await fetchRefreshToken();

    console.log("a", newAccessToken);

    if (!newAccessToken) {
      return Promise.reject("User not authenticated");
    }

    accessToken = newAccessToken;

    return await fetch(`${API_BASE_URL}${url}`, {
      ...init,
      headers: {
        ...init?.headers,
        Authorization: `Bearer ${newAccessToken ?? ""}`,
      },
    });
  }

  return response;
};
