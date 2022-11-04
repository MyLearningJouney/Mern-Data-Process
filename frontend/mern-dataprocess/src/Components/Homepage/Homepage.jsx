import { useState, useEffect } from "react";
import ValueTable from "../Homepage/ValueTable/ValueTable.jsx";
import InputFile from "../Homepage/InputFile/InputFile.jsx";
import HeaderSelector from "../Homepage/HeaderSelector/HeaderSelector.jsx";

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
      <header> Fechamento Ponto </header>
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
          <ValueTable header={header} data={data} error={error} />
        </section>
      </main>
    </>
  );
}

export default Homepage;
