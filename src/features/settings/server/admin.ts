"use server";

import { fetchWithAuth } from "@/lib/api";
import { Admin } from "@/types/admin";
import { APIError } from "@/types/errors";
import { MutiResponseType, SingleResponseType } from "@/types/response";
import { revalidateTag } from "next/cache";

export const getAdmins = async (
  params?: any
): Promise<MutiResponseType<Admin>> => {
  try {
    // get searchparams
    const searchParams = new URLSearchParams(params ?? "").toString();

    const response = await fetchWithAuth(
      `/api/admin/v1/admin?${searchParams}`,
      {
        next: {
          tags: ["admin"],
        },
      }
    );

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

export const deleteAdmin = async (
  id: string
): Promise<SingleResponseType<Admin>> => {
  try {
    const response = await fetchWithAuth(`/api/admin/v1/admin/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();

    if (!response.ok) throw data;

    revalidateTag("profile");
    revalidateTag("admin");

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
