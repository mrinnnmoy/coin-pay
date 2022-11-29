import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Note: Change v1 to v2 on rapid api

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "eeda8a679dmshb749c246088e800p18debcjsn3496385f44ed",
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

const baseUrl = "https://coinranking1.p.rapidapi.com";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest("/coins")
    }),
  }),
});

export const {
    useGetCryptosQuery,
} = cryptoApi;