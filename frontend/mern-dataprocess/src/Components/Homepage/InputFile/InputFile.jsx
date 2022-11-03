import { useState } from "react";
import Papa from "papaparse";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function InputFile({setData,setHeader,setError,validHeaders}) {
  const allowedExtensions = ["csv"];
  const [file, setFile] = useState("");

  const handleFileChange = (e) => {
    setError("");
    // Check if user has entered the file
    if (e.target.files.length) {
      const inputFile = e.target.files[0];
      // Check the file extensions, if it not
      // included in the allowed extensions
      // we show the error
      const fileExtension = inputFile?.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }
      // If input type is correct set the state
      setFile(inputFile);
    }
  };

  const handleParse = () => {
    // If user clicks the parse button without
    // a file we show a error
    if (!file) return setError("Enter a valid file");

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();

    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
      const csv = await Papa.parse(target.result, { header: true });
      const parsedData = validColumns(csv.data, validHeaders);
      const columns = Object.keys(parsedData[0]);
      columns.push("Actions");
      setHeader(columns);
      setData(parsedData);
    };
    reader.readAsText(file);
  };

  // This functions recieves an array of data and keys that need to be used.
  function validColumns(array, keys) {
    // then, it map the array of data, first transform the object into array to use filter method,
    // then filter the arrays based on valid headers, and then transform it into object again
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
