import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://student-attendance-system-backend.vercel.app/api/",
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
        body: { aadhaarNumber },
      }),
    }),
    getStudents: builder.query({
      query: () => `student/get`,
    }),
  }),
});

export default serviceApi;
export const {
  useAddStudentMutation,
  useAttendanceMutation,
  useGetStudentsQuery,
} = serviceApi;
