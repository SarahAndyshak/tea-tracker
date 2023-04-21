import React from "react";
import Header from "./Header";
import TeaControl from "./TeaControl";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <TeaControl />
      </Container>
    </React.Fragment>
  );
}

export default App;