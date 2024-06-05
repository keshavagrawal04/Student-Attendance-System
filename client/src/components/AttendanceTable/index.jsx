import { Container, Row, Col, Table } from "react-bootstrap";
import { useGetStudentsQuery } from "../../apis/service";
import "./style.css";

const AttendanceTable = () => {
  const { data } = useGetStudentsQuery();

  const getUniqueDates = (students) => {
    const allDates = new Set();
    students.forEach((student) =>
      student.attendance.forEach((attendance) => allDates.add(attendance.date))
    );
    return Array.from(allDates).sort(
      (dateA, dateB) => new Date(dateA) - new Date(dateB)
    );
  };

  return (
    <Container>
      <Row>
        <h2 className="text-center fw-bold mb-4 mt-5">Attendance Table</h2>
      </Row>
      <Row className="d-flex justify-content-center align-items-center">
        <Col className="col-xl-8 col-lg-8 col-12 d-flex justify-content-center flex-column">
          <Table
            striped
            bordered
            hover
            className="text-center attendance-table"
          >
            <thead>
              <tr>
                <th style={{ padding: "5px" }}>S.No</th>
                <th style={{ padding: "5px" }}>Name</th>
                <th style={{ padding: "5px" }}>Subject</th>
                {getUniqueDates(data?.students || []).map((date, index) => (
                  <th key={index} style={{ padding: "5px" }}>
                    {date.split("T")[0]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.students.map((student, studentIndex) => (
                <tr key={student._id}>
                  <td style={{ padding: "5px" }}>{studentIndex + 1}</td>
                  <td style={{ padding: "5px" }}>{student.fullName}</td>
                  <td style={{ padding: "5px" }}>{student.subject}</td>
                  {/* Display attendance status for all dates (or 'Absent' for missing) */}
                  {getUniqueDates(data?.students || []).map(
                    (date, dateIndex) => (
                      <td
                        key={`${studentIndex}-${dateIndex}`}
                        style={{ padding: "5px" }}
                      >
                        {student.attendance.some(
                          (attendance) => attendance.date === date
                        )
                          ? student.attendance.find(
                              (attendance) => attendance.date === date
                            ).present
                            ? "Present"
                            : "Absent"
                          : "Absent"}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AttendanceTable;
