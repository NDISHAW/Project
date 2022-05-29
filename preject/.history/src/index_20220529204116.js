import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Signup from "./Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <Container>
      <row>
        <col>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </col>
      </row>
    </Container>
  );
}

export default App;
