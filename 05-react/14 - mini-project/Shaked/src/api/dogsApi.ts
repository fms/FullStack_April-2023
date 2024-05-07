import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface DogCardProps {
    breed: string,
}

export const dogsApi = createApi({
  reducerPath: 'dogsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dog.ceo/api' }),
  endpoints: (builder) => ({
    getAllDogs: builder.query<DogCardProps[], void>({
      query: () => '/breeds/list/all',
    }),
    getBreedImages: builder.query<string[], string>({
      query: (breed) => `/breed/${breed}/images`,
    }),
  }),
});

export const { useGetAllDogsQuery, useGetBreedImagesQuery } = dogsApi;
