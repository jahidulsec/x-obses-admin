"use server"

import { fetchWithAuth } from "@/lib/api";
import { Blog } from "@/types/blog";
import { APIError } from "@/types/errors";
import { MutiResponseType, SingleResponseType } from "@/types/response";
import { revalidateTag } from "next/cache";

export const getBlogs = async (
  params?: any
): Promise<MutiResponseType<Blog>> => {
  try {
    // get searchparams
    const searchParams = new URLSearchParams(params ?? "").toString();

    const response = await fetchWithAuth(
      `/api/other/v1/blog?${searchParams}`,
      {
        next: {
          tags: ["blog"],
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


export const deleteBlog = async (
  id: string
): Promise<SingleResponseType<Blog>> => {
  try {
    const response = await fetchWithAuth(`/api/other/v1/blog/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();

    if (!response.ok) throw data;

    revalidateTag("blog");

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