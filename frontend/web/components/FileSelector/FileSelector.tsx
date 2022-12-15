import { useRef, useState } from "react";
import ConfirmButton from "../Buttons/ConfirmButton";

function FileSelector() {
  const inputFile = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState();
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const allowedExtensions = ["csv"];

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const a = inputFile.current!.files!;
    console.log(a)
    setFile(a);
    console.log(file);
    //console.log(a);
    //console.log(typeof a);
    //console.log(file);
    //console.log(inputFile.current?.files);
    //console.log(file);
  };

  const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setError("");
    if ((event.target as HTMLInputElement).files) {
      const uploadedFile = (event.target as HTMLInputElement).files!.item(0);
      const uploadedFileExtension = uploadedFile!.type.split("/")[1];
      if (!allowedExtensions.includes(uploadedFileExtension)) {
        setError("Please input a csv file");
        setDisabled(true);
        console.log(error);
        return;
      }
      setDisabled(false);
    }
  };

  const inputLabelButtonStyle = `
  bg-blue-500 
  px-6 
  py-2 
  rounded 
  text-white 
  cursor-pointer 
  hover:bg-blue-600 
  hover:drop-shadow-[0_5px_7px_rgba(37,99,235,0.60)] 
  hover:-translate-y-1 
  hover:transition ease-in-out"`;

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <p>Selecione o arquivo desejado</p>
          <label className={inputLabelButtonStyle} htmlFor="file">
            Selecionar
          </label>
          <input
            className="invisible"
            ref={inputFile}
            type="file"
            id="file"
            name="file"
            accept="text/.csv"
            onChange={changeHandler}
          />
        </div>
        <div>
          <ConfirmButton text="Confirmar" type="submit" disabled={disabled} />
          <p>{error}</p>
        </div>
      </form>
      <div>
        <button onClick={() => console.log(file)}>Oi</button>
      </div>
    </>
  );
}

export default FileSelector;
