"use server";

import { fetchWithAuth } from "@/lib/api";
import { APIError } from "@/types/errors";
import { revalidateTag } from "next/cache";

export const addMarathon = async (prevState: unknown, formData: FormData) => {
  try {
    // modify form data
    const modifiedFrmData = Object.fromEntries(formData.entries());

    if (!formData.get("imagePath")) {
      formData.delete("imagePath");
    }

    console.log(modifiedFrmData);

    // fetch api
    const response = await fetchWithAuth(`/api/marathon/v1/marathon`, {
      method: "POST",
      body: formData,
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
    });

    const data = await response.json();

    console.log(data);

    // if not ok, throw error
    if (!response.ok) {
      throw data as APIError;
    }

    revalidateTag("marathon")
    revalidateTag("marathon-stats")

    return {
      sucess: data.message,
      error: null,
      toast: null,
    };
  } catch (error) {
    const err = error as APIError;

    if (err.errors) {
      let modifiedError: any = {};

      for (const key in err.errors) {
        modifiedError = {
          ...modifiedError,
          [err.errors[key].field]: [err.errors[key].message],
        };
      }
      return { error: modifiedError };
    }
    return { toast: err.message };
  }
};
