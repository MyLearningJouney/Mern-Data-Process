import { useState, useEffect, useRef } from "react";
import ValueTable from "../Homepage/ValueTable/ValueTable.jsx";
import InputFile from "../Homepage/InputFile/InputFile.jsx";
import HeaderSelector from "../Homepage/HeaderSelector/HeaderSelector.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/esm/Table.js";
import ValueCell from "./ValueTable/ValueCell.jsx";

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
  const [cellText, setcellText] = useState("");

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

  console.log(data);
  const teste = data;
  console.log(teste[0].Nome);
  console.log(cellText);
  return (
    <>
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
        <section id="tabela-2">
          <Container fluid>
            <Table striped bordered hover size="sm">
              <thead>
                <th>Matricula</th>
                <th>Nome</th>
                <th>Cargo</th>
                <th>Valor</th>
              </thead>
              <tbody>
                <tr id={"123"}>
                  <ValueCell cellText={"123"} setCellText={setcellText} />
                  <ValueCell cellText={"Fulano"} setCellText={setcellText} />
                  <ValueCell cellText={"Ninja"} setCellText={setcellText} />
                  <ValueCell cellText={"12:00"} setCellText={setcellText} />
                </tr>
                <tr id={"456"}>
                  <ValueCell cellText={"456"} setCellText={setcellText} />
                  <ValueCell cellText={"Siclano"} setCellText={setcellText} />
                  <ValueCell cellText={"Magico"} setCellText={setcellText} />
                  <ValueCell cellText={"13:00"} setCellText={setcellText} />
                </tr>
              </tbody>
            </Table>
          </Container>
        </section>
      </main>
    </>
  );
}

export default Homepage;
