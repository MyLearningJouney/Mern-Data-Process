import { useState } from "react";
import Papa from "papaparse";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function InputFile({ data, setData, setHeader, setError, validHeader }) {
  const allowedExtensions = ["csv"];
  const [file, setFile] = useState("");

  const handleFileChange = (e) => {
    setError("");
    if (e.target.files.length) {
      const inputFile = e.target.files[0];
      const fileExtension = inputFile?.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }
      setFile(inputFile);
    }
  };

  const handleParse = () => {
    if (!file) return setError("Enter a valid file");
    const reader = new FileReader();
    reader.onload = async ({ target }) => {
      const csv = await Papa.parse(target.result, { header: true });
      const parsedData = validColumns(csv.data, validHeader);
      const columns = Object.keys(parsedData[0]);
      columns.push("Actions");
      setHeader(columns);
      setData(parsedData);
    };
    reader.readAsText(file);
  };

  function validColumns(array, keys) {
    return array.map((x) =>
      Object.fromEntries(Object.entries(x).filter(([k]) => keys.includes(k)))
    );
  }

  return (
    <div>
      <InputGroup>
        <label htmlFor="csvInput">Enter CSV File</label>
        <input
          onChange={handleFileChange}
          id="csvInput"
          name="file"
          type="File"
        />
      </InputGroup>
      <div>
        <Button onClick={handleParse}>Submit</Button>
      </div>
    </div>
  );
}

export default InputFile;
