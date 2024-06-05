import { useGetStudentsQuery } from "../../apis/service";

const AttendanceTable = () => {
  const { data } = useGetStudentsQuery();

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Subject</th>
          <th>Attendance Dates</th>
        </tr>
      </thead>
      <tbody>
        {data?.students.map((student) => (
          <tr key={student._id}>
            <td>{student.fullName}</td>
            <td>{student.subject}</td>
            <td>
              {student.attendance.length > 0 ? (
                student.attendance.map((attendance) => (
                  <span key={attendance._id}>
                    {attendance.date.toLocaleDateString() + " "}
                  </span>
                ))
              ) : (
                <span>No attendance recorded</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceTable;
