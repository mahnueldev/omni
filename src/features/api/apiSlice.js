import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
    tagTypes: ['Recipe', 'User'],
    // eslint-disable-next-line no-unused-vars
    endpoints: builder => ({})
})