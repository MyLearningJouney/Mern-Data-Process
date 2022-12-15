import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";

function HeaderSelector({ validHeader, setValidHeader }) {
  function checkboxHandler(e) {
    if (e.target.checked) {
      validHeader.push(e.target.name);
    } else {
      validHeader.splice(validHeader.indexOf(e.target.name), 1);
    }
    setValidHeader(validHeader);
    console.log(validHeader);
  }

  return (
    <Container fluid>
      <fieldset>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <legend>Selecione as colunas desejadas</legend>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Stack direction="horizontal" gap={3}>
              <input
                type="checkbox"
                id="bancoHorasNegativo"
                name="Banco de Horas Negativo (N.A.)"
                onChange={checkboxHandler}
              />
              <label htmlFor="bancoHorasNegativo">
                Banco de Horas Negativo (N.A.)
              </label>
              <input
                type="checkbox"
                id="horaExtra"
                name="Hora Extra"
                onChange={checkboxHandler}
              />
              <label htmlFor="horaExtra">Hora Extra</label>
              <input
                type="checkbox"
                id="falta"
                name="FALTA"
                onChange={checkboxHandler}
              />
              <label htmlFor="falta">FALTA</label>
              <input
                type="checkbox"
                id="faltaBH"
                name="FALTA (quitação automática)"
                onChange={checkboxHandler}
              />
              <label htmlFor="faltaBH">FALTA (quitação automática)</label>
              <input
                type="checkbox"
                id="horaExtraBH"
                name="Hora Extra (quitação automática)"
                onChange={checkboxHandler}
              />
              <label htmlFor="horaExtraBH">
                Hora Extra (quitação automática)
              </label>
            </Stack>
          </Col>
        </Row>
      </fieldset>
    </Container>
  );
}
export default HeaderSelector;
