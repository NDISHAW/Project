import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Signup from "./Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;



    // <AuthProvider>
    //   <Container
    //     className="d-flex align-items-center justify-content-center"
    //     style={{ minHeight: "100vh", minWidth: "100vw" }}
    //   >
    //     <div className="w-100" style={{ maxWidth: "400px" }}>
    //       <Signup />
    //     </div>
    //   </Container>
    // </AuthProvider>