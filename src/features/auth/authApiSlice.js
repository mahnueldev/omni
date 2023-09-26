import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "/register", // Adjust the endpoint URL for registration
        method: "POST",
        body: { ...credentials }, // Pass the user registration data
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApiSlice;
