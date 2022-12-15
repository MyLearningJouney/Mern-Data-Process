import { useState, useEffect } from "react";
import ValueTable from "./ValueTable/ValueTable.jsx";
import InputFile from "./InputFile/InputFile.jsx";
import HeaderSelector from "./HeaderSelector/HeaderSelector.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DataContext from "../../contexts/DataContext.js";

function Homepage() {
  const [data, setData] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("MERN_DATA_PROCESS_DATA")) || []
    );
  });
  const [header, setHeader] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("MERN_DATA_PROCESS_HEADERS")) || []
    );
  });
  const [validHeader, setValidHeader] = useState(() => {
    return (
      JSON.parse(
        window.localStorage.getItem("MERN_DATA_PROCESS_VALIDHEADERS")
      ) || ["Matrícula", "Nome", "Cargo"]
    );
  });
  const [error, setError] = useState("");

  useEffect(() => {
    window.localStorage.setItem("MERN_DATA_PROCESS_DATA", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    window.localStorage.setItem(
      "MERN_DATA_PROCESS_HEADERS",
      JSON.stringify(header)
    );
  }, [header]);

  useEffect(() => {
    window.localStorage.setItem(
      "MERN_DATA_PROCESS_VALIDHEADERS",
      JSON.stringify(validHeader)
    );
  }, [validHeader]);

  return (
    <>
      <DataContext.Provider value={{ data, setData }}>
        <header>
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <h1>Fechamento Ponto</h1>
              </Col>
            </Row>
          </Container>
        </header>
        <main>
          <section id="selectors">
            <HeaderSelector
              validHeader={validHeader}
              setValidHeader={setValidHeader}
            />
            <InputFile
              data={data}
              setData={setData}
              setHeader={setHeader}
              setError={setError}
              validHeader={validHeader}
            />
          </section>
          <section id="tabela">
            <Container fluid>
              <ValueTable header={header} data={data} error={error} />
            </Container>
          </section>
        </main>
      </DataContext.Provider>
    </>
  );
}

export default Homepage;
