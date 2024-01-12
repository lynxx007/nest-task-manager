import { SignInInput } from "../../components/form/SignInForm";
import { apiSlice } from "../apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<
      {
        message: string;
        accessToken: string;
        user: {
          _id: string;
          username: string;
          email: string;
          avatar?: string;
          teams?: { _id: string }[];
          tasks?: { _id: string }[];
          currentPosition?: string;
        };
      },
      SignInInput
    >({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
