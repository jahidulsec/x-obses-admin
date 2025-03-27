"use server";

import { createAccessTokenSession, createSession } from "@/lib/session";
import { APIError } from "@/types/errors";

export const login = async (prevState: unknown, formData: FormData) => {
  try {
    // modify form data
    const modifiedFrmData = Object.fromEntries(formData.entries());

    // fetch api
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/v1/admins/login`,
      {
        method: "POST",
        body: JSON.stringify(modifiedFrmData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    // if not ok, throw error
    if (!response.ok) {
      throw data as APIError;
    }

    // create cookie session
    await createSession(data?.data?.refreshToken as string);
    await createAccessTokenSession(data?.data?.accessToken as string);

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
