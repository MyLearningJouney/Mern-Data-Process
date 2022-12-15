import InputItem from "./InputItem/InputItem";

interface Props {
  validHeader: string[];
  setValidHeader: React.Dispatch<React.SetStateAction<string[]>>;
}

function HeaderSelector({ validHeader, setValidHeader }: Props) {
  const optHeaders = [
    { name: "Banco de Horas Negativo (N.A.)", id: "bancoHorasNegativo" },
    { name: "Hora Extra", id: "horaExtra" },
    { name: "FALTA", id: "falta" },
    { name: "FALTA (quitação automática)", id: "faltaBH" },
    { name: "Hora Extra (quitação automática)", id: "horaExtraBH" },
  ];
  function checkboxHandler(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      validHeader.push(event.target.name);
    } else {
      validHeader.splice(validHeader.indexOf(event.target.name), 1);
    }
    setValidHeader(validHeader);
    console.log(validHeader);
  }

  return (
    <div className="flex container mx-auto justify-center flex-col ">
      <div className="flex flex-col p-2">
        <p className="flex columns-auto text-center justify-center mb-4">
          Selecione as colunas desejadas
        </p>
        <fieldset className="columns-auto gap-3 flex justify-evenly items-center text-center leading-loose flex-row">
          {optHeaders.map((element) => (
            <InputItem
              key={element.id}
              id={element.id}
              name={element.name}
              checkboxHandler={checkboxHandler}
            />
          ))}
        </fieldset>
      </div>
    </div>
  );
}
export default HeaderSelector;
