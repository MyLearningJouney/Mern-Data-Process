import Table from "react-bootstrap/Table";
import ValueCell from "./ValueCell.jsx";
import { useRef } from "react";

function ValueTable({ header, data, error }) {
  const rowRef = useRef(null);
  const columnRef = useRef(null);

  function handleRef(ref, value) {
    ref.current = value;
  }

  return (
    <div>
      <div>
        <Table>
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
                <tr key={index} ref={handleRef(rowRef, item.Matrícula)}>
                  {Object.values(item).map((value, index) => {
                    return (
                      <ValueCell
                        key={index}
                        cellValue={value}
                        Headers={handleRef(columnRef, Object.keys(item)[index])}
                        row={rowRef.current}
                        column={columnRef.current}
                      />
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
