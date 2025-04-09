import { fetchWithAuth } from "@/lib/api";
import { APIError } from "@/types/errors";
import { MarathonUser, Particiants } from "@/types/leaderboard";
import { Marathon } from "@/types/marathon";
import { MutiResponseType } from "@/types/response";
import { SuccessSingle } from "@/types/success";

interface Leaderboard extends SuccessSingle<Marathon> {
  totalParticiants: number;
  particiants: Particiants[];
}

export interface SingleResponseType {
  data: Leaderboard | null;
  error: APIError | null;
}

export const getMarathon = async (
  id: string,
  params?: any
): Promise<SingleResponseType> => {
  try {
    // get searchparams
    const searchParams = new URLSearchParams(params ?? "").toString();

    const response = await fetchWithAuth(
      `/api/marathon/v1/marathon/${id}?${searchParams}`,
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

export const getMarathonUsers = async (
  id: string,
  params?: any
): Promise<MutiResponseType<MarathonUser>> => {
  try {
    // get searchparams
    const searchParams = new URLSearchParams(params ?? "")
    searchParams.append('marathonId', id)

    const response = await fetchWithAuth(
      `/api/marathon/v1/user/?${searchParams.toString()}`,
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
