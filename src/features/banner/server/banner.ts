"use server"

import { fetchWithAuth } from "@/lib/api";
import { Banner } from "@/types/banner";
import { APIError } from "@/types/errors";
import { MutiResponseType, SingleResponseType } from "@/types/response";
import { revalidateTag } from "next/cache";

export const getBanners = async (
  params?: any
): Promise<MutiResponseType<Banner>> => {
  try {
    // get searchparams
    const searchParams = new URLSearchParams(params ?? "").toString();

    const response = await fetchWithAuth(
      `/api/other/v1/banner?${searchParams}`,
      {
        next: {
          tags: ["banner"],
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


export const deleteBanner = async (
  id: string
): Promise<SingleResponseType<Banner>> => {
  try {
    const response = await fetchWithAuth(`/api/other/v1/banner/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();

    if (!response.ok) throw data;

    revalidateTag("banner");

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