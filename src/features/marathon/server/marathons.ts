import { fetchWithAuth } from "@/lib/api";
import { SuccessMulti } from "@/types/success";
import { Marathon } from "../components/columns";
import { APIError } from "@/types/errors";

interface ResponseType {
  data: SuccessMulti<Marathon> | null;
  error: APIError | null;
}

export const getMarathons = async (): Promise<ResponseType> => {
  try {
    const response = await fetchWithAuth("/api/marathon/v1/marathon", {
      next: {
        tags: ["marathon"],
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
