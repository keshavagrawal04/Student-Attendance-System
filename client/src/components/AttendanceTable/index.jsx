import { Container, Row, Col } from "react-bootstrap";
import { useGetStudentsQuery } from "../../apis/service";
import "./style.css";

const AttendanceTable = () => {
  const { data } = useGetStudentsQuery();

  return (
    <Container>
      <Row>
        <h2 className="text-center fw-bold mb-4 mt-5">Attendance Table</h2>
      </Row>
      <Row className="d-flex justify-content-center align-items-center">
        <Col className="col-xl-6 col-lg-6 col-12 d-flex justify-content-center flex-column">
          <table border={2} className="text-center">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Subject</th>
                <th>Attendance Dates</th>
              </tr>
            </thead>
            <tbody>
              {data?.students.map((student, index) => (
                <tr key={student._id}>
                  <td>{index + 1}</td>
                  <td>{student.fullName}</td>
                  <td>{student.subject}</td>
                  <td>
                    {student.attendance.length > 0 ? (
                      student.attendance.map((attendance) => (
                        <span key={attendance._id}>
                          {attendance.date.split("T")[0]}
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
        </Col>
      </Row>
    </Container>
  );
};

export default AttendanceTable;
