import { apiSlice } from '../api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => ({
        url: '/user',
        method: 'GET',
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetUserProfileQuery, useGetUsersQuery  } = userApiSlice;
