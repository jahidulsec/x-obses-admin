"use server";

import { fetchWithAuth } from "@/lib/api";
import { Admin } from "@/types/admin";
import { APIError } from "@/types/errors";
import { SingleResponseType } from "@/types/response";

export const getProfile = async (): Promise<SingleResponseType<Admin>> => {
  try {
    const response = await fetchWithAuth(`/api/admin/v1/token/admin`, {
      next: {
        tags: ["profile"],
      },
    });
    const data = await response.json();

    if (!response.ok) throw data;

    return {
      data: data,
      error: null,
    };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      error: error as APIError,
    };
  }
};
