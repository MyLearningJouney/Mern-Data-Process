import { useState } from "react";
import Papa from "papaparse";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function ValueCell({text}) {
  return (
    <td contenteditable='true'>{text}</td>
  );
}

export default ValueCell;
