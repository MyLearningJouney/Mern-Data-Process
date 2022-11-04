import Table from "react-bootstrap/Table";

function ValueTable({ header, data, error }) {
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
                      <td key={index} contentEditable="true">
                        {value}
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
