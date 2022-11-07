import Table from "react-bootstrap/Table";
import ValueCell from "../ValueTable/ValueCell.jsx";
import { useState } from "react";

function ValueTable({ header, data, error }) {
  const [cellValue, setCellValue] = useState("");

  return (
    <div>
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              {error
                ? error
                : header.map((header, index) => {
                    return <th key={index}>{header}</th>;
                  })}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  {Object.values(item).map((value, index) => {
                    return (
                      <td
                        key={index}
                        onInput={() => console.log()}
                        contentEditable="true"
                        cellValue={cellValue}
                        setCellValue={setCellValue}
                      >
                        {cellValue}
                      </td>
                    );
                  })}
                  <td>
                    <button>Oi</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div></div>
      </div>
    </div>
  );
}
export default ValueTable;
