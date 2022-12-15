interface Props {
  text: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function ConfirmButton({ text, type, disabled, onClick}: Props) {

    const enabledStyle = `
    bg-blue-500 
    px-6 
    py-2 
    rounded 
    text-white 
    cursor-pointer 
    hover:bg-blue-600 
    hover:drop-shadow-[0_5px_7px_rgba(37,99,235,0.60)] 
    hover:-translate-y-1 
    hover:transition ease-in-out"`

    const disabledStyle = `
    bg-blue-400 
    px-6 
    py-2 
    rounded 
    text-white 
    cursor-not-allowed
    `


  return (
    <button
      className={disabled ? disabledStyle : enabledStyle}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default ConfirmButton;
