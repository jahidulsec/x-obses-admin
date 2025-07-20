"use server";

import { fetchWithAuth } from "@/lib/api";
import { APIError } from "@/types/errors";
import { revalidateTag } from "next/cache";

export const addBanner = async (prevState: unknown, formData: FormData) => {
  try {
    // modify form data
    const modifiedFrmData = Object.fromEntries(formData.entries());

    if ((modifiedFrmData.imagePath as File).size === 0) {
      formData.delete("imagePath");
    }

    console.log(modifiedFrmData);

    // fetch api
    const response = await fetchWithAuth(`/api/other/v1/banner`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    // if not ok, throw error
    if (!response.ok) {
      throw data as APIError;
    }

    revalidateTag("banner");

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

export const updatebanner = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  try {
    // modify form data
    const modifiedFrmData = Object.fromEntries(formData.entries());

    console.log(modifiedFrmData)

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

    // delete null imagePath
    if ((modifiedFrmData.imagePath as File).size === 0) {
      cleanedFormData.delete("imagePath");
    }

    // fetch api
    const response = await fetchWithAuth(`/api/other/v1/banner/${id}`, {
      method: "PATCH",
      body: cleanedFormData,
    });

    const data = await response.json();

    // if not ok, throw error
    if (!response.ok) {
      throw data as APIError;
    }

    revalidateTag("banner");

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
