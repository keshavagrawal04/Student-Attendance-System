import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useAttendanceMutation } from "../../apis/service";
import { Html5QrcodeScanner } from "html5-qrcode";
import "./style.css";

const QRScanner = () => {
  const [scanResult, setScanResult] = useState("");
  const [isScanning, setIsScanning] = useState(true);
  const [message, setMessage] = useState("");

  const [addAttendance] = useAttendanceMutation();

  useEffect(() => {
    if (isScanning) {
      const scanner = new Html5QrcodeScanner("reader", {
        qrbox: { width: 250, height: 250 },
        fps: 5,
      });

      scanner.render(async (result) => {
        scanner.clear();
        setScanResult(result);
        setIsScanning(false);
        const response = await addAttendance({ aadhaarNumber: result });
        response.error
          ? setMessage(response.error.data.message)
          : setMessage(response.data.message);
        console.log(response.error.data);
      });

      return () => {
        scanner.clear();
      };
    }
  }, [isScanning, addAttendance]);

  const handleScanAnother = () => {
    setScanResult("");
    setIsScanning(true);
  };

  return (
    <Container>
      <Row>
        <h2 className="text-center fw-bold mb-4">QR Scanner</h2>
      </Row>
      <Row className="d-flex justify-content-center align-items-center">
        <Col className="col-xl-6 col-lg-6 col-12 d-flex justify-content-center flex-column">
          {scanResult ? (
            <>
              <div className="text-center fs-3">{message}</div>
              <button
                className="btn btn-primary fs-5 mt-4"
                onClick={handleScanAnother}
              >
                Scan Another QR
              </button>
            </>
          ) : (
            <div id="reader" className="w-100"></div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default QRScanner;
