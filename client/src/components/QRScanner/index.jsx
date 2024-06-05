import { Container, Row, Col } from "react-bootstrap";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import "./style.css";

const QRScanner = () => {
  const [scanResult, setScanResult] = useState("");
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    if (isScanning) {
      const scanner = new Html5QrcodeScanner("reader", {
        qrbox: { width: 250, height: 250 },
        fps: 5,
      });

      scanner.render((result) => {
        scanner.clear();
        setScanResult(result);
        setIsScanning(false);
      });

      return () => {
        scanner.clear();
      };
    }
  }, [isScanning]);

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
              <div className="text-center fs-3">{scanResult}</div>
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
