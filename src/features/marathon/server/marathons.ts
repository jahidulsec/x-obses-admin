"use server";

import { fetchWithAuth } from "@/lib/api";
import { APIError } from "@/types/errors";
import { Marathon } from "@/types/marathon";
import { MutiResponseType, SingleResponseType } from "@/types/response";
import { revalidateTag } from "next/cache";

export interface MarathonStats {
  total: number;
  onsite: number;
  virtual: number;
}

export const getMarathons = async (
  params?: any
): Promise<MutiResponseType<Marathon>> => {
  try {
    // get searchparams
    const searchParams = new URLSearchParams(params ?? "").toString();

    const response = await fetchWithAuth(
      `/api/marathon/v1/marathon?${searchParams}`,
      {
        next: {
          tags: ["marathon"],
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

export const getMarathonStats = async (): Promise<
  SingleResponseType<MarathonStats>
> => {
  try {
    // get searchParams

    const response = await fetchWithAuth(`/api/marathon/v1/stats/marathon`, {
      next: {
        tags: ["marathon-stats"],
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

export const deleteReward = async (
  id: string
): Promise<SingleResponseType<Marathon>> => {
  try {
    const response = await fetchWithAuth(
      `/api/marathon/v1/marathon/reward/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();

    if (!response.ok) throw data;

    revalidateTag("marathon");

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
