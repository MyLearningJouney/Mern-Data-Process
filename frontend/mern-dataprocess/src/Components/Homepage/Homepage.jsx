import { useState } from "react";
import ValueTable from "../Homepage/ValueTable/ValueTable.jsx";
import InputFile from "../Homepage/InputFile/InputFile.jsx";

function Homepage() {
  const [data, setData] = useState([]);
  const [header, setHeader] = useState([]);
  const [error, setError] = useState("");
  const validHeaders = [
    "Matrícula",
    "Nome",
    "Cargo",
    "Hora Extra",
    "FALTA",
    "Banco de Horas Negativo (N.A.)",
  ];

  return (
    <div>
      <InputFile
        setData={setData}
        setHeader={setHeader}
        setError={setError}
        validHeaders={validHeaders}
      />
      <ValueTable header={header} data={data} error={error} />
    </div>
  );
}

export default Homepage;
