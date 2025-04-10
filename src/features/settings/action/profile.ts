"use server";

import { fetchWithAuth } from "@/lib/api";
import { APIError } from "@/types/errors";
import { revalidateTag } from "next/cache";

export const updateProfile = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  try {
    // modify form data
    const modifiedFrmData = Object.fromEntries(formData.entries());

    // Create a cleaned version
    const cleanedFormData = new FormData();

    for (const key in modifiedFrmData) {
      if (
        modifiedFrmData[key] !== null &&
        modifiedFrmData[key] !== undefined &&
        modifiedFrmData[key] !== "null" &&
        modifiedFrmData[key] !== "" &&
        modifiedFrmData[key] !== "undefined"
      ) {
        cleanedFormData.append(key, modifiedFrmData[key]);
      }
    }

    // convert form data to object for JSON
    const newFormResponse = Object.fromEntries(cleanedFormData.entries());

    // fetch api
    const response = await fetchWithAuth(`/api/admin/v1/admin/${id}`, {
      method: "PATCH",
      body: JSON.stringify(newFormResponse),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    // if not ok, throw error
    if (!response.ok) {
      throw data as APIError;
    }

    revalidateTag("profile");

    return {
      sucess: data.message,
      error: null,
      toast: null,
    };
  } catch (error) {
    const err = error as APIError;

    console.error(err);

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
