import { useState, useContext, useEffect } from "react";
import DataContext from "../../../contexts/DataContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsCheckLg } from "react-icons/bs";
import styled from "styled-components";

const FixedData = styled.td`
  background-color: rgba(0, 0, 0, 0.05) !important;
`;

function ValueCell({ cellValue, row, column }) {
  const [editable, setEditable] = useState(false);
  const [editedCell, setEditedCell] = useState(cellValue);
  const [fixed, setFixed] = useState(true);
  const { data, setData } = useContext(DataContext);
  const fixedHeader = ["Matrícula", "Nome", "Cargo"];

  useEffect(() => {
    console.log(column);
    if (fixedHeader.includes(column)) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, []);

  function handleClick(e) {
    e.preventDefault();
    if (fixed) setEditable(false);
    else setEditable(true);
  }

  function handleBlur(e) {
    e.preventDefault();
    setTimeout(() => {
      setEditable(false);
      setEditedCell(cellValue);
    }, 100);
  }

  function handleConfirmEdit(e) {
    e.preventDefault();
    setEditable(false);
    const newData = data.map((element) => {
      if (element.Matrícula === row) {
        element[column] = editedCell;
        return element;
      } else {
        return element;
      }
    });
    setData(newData);
  }

  function handleChangeEdit(e) {
    e.preventDefault();
    setEditedCell(e.target.value);
  }

  const editableCell = editable ? (
    <td>
      <InputGroup>
        <Form.Control
          value={editedCell}
          onBlur={(event) => handleBlur(event)}
          onChange={(event) => handleChangeEdit(event)}
          autoFocus
          required
          pattern={"([0-9]{1,}):(([0-5]){1}([0-9]){1})"}
        />
        <Button
          variant="outline-secondary"
          onMouseDown={(event) => handleConfirmEdit(event)}
        >
          <BsCheckLg />
        </Button>
      </InputGroup>
    </td>
  ) : (
    <td onClick={(event) => handleClick(event)}>
      <p>{editedCell}</p>
    </td>
  );

  return fixed ? (
    <FixedData>
      <p>{editedCell}</p>
    </FixedData>
  ) : (
    editableCell
  );
}

export default ValueCell;
