import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsCheckLg, BsXLg } from "react-icons/bs";

function ValueCell({ cellText, setCellText }) {
  const [editable, setEditable] = useState(false);
  const [editedCell, setEditedCell] = useState(cellText);

  function handleClick(e) {
    e.preventDefault();
    setEditable(true);
  }

  function handleFocus(e) {
    e.preventDefault();
    console.log(e.target.textContent);
    console.log(e.target);
  }

  function handleBlur(e) {
    e.preventDefault();
    setTimeout(() => {
      setEditable(false);
      setEditedCell(cellText);
    }, 100);
  }

  function handleConfirmEdit(e) {
    e.preventDefault();
    console.log("cliquei");
    console.log(editedCell);
    setCellText(editedCell);
  }

  function handleChangeEdit(e) {
    e.preventDefault();
    setEditedCell(e.target.value);
    console.log(e.target.value);
  }

  return editable ? (
    <td>
      <InputGroup>
        <Form.Control
          value={editedCell}
          onFocus={() => console.log("foquei")}
          onBlur={(event) => handleBlur(event)}
          onChange={(event) => handleChangeEdit(event)}
          autoFocus
          style={{ width: 0 }}
        />
        <Button
          variant="outline-secondary"
          onClick={(event) => handleConfirmEdit(event)}
        >
          <BsCheckLg />
        </Button>
      </InputGroup>
    </td>
  ) : (
    <td
      onClick={(event) => handleClick(event)}
      onFocus={(event) => handleFocus(event)}
    >
      <p>{cellText}</p>
    </td>
  );
}

export default ValueCell;
