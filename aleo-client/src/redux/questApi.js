import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const questApi = createApi({
  reducerPath: 'questApi',
  tagTypes: ['Quests'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (build) => ({
    getUsersByQuest: build.query({
      query: ({ questNumber = '', limit = '' }) =>
        `quest?${questNumber && `questNumber=${questNumber}`}&${
          limit && `limit=${limit}`
        }`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Quests' }, id)),
              { type: 'Quests', id: 'LIST' },
            ]
          : [{ type: 'Quests', id: 'LIST' }],
    }),
    addUser: build.mutation({
      query: (body) => ({
        url: 'quest',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Quests', id: 'LIST' }],
    }),
  }),
})

export const { useGetUsersByQuestQuery, useAddUserMutation } = questApi
