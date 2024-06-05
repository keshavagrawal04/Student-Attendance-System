import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
    // baseUrl: "https://student-attendance-system-backend.vercel.app/api/",
  }),
  endpoints: (builder) => ({
    addStudent: builder.mutation({
      query: ({ student }) => ({
        url: `student/add`,
        method: "POST",
        body: student,
      }),
    }),
    attendance: builder.mutation({
      query: (aadhaarNumber) => ({
        url: `student/attendance`,
        method: "POST",
        body: {aadhaarNumber},
      }),
    }),
  }),
});

export default serviceApi;
export const { useAddStudentMutation, useAttendanceMutation } = serviceApi;
