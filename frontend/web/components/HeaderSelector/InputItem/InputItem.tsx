interface Props {
  id: string;
  name: string;
  checkboxHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
function InputItem({ id, name, checkboxHandler }: Props) {
  return (
    <div className="flex flex-row items-center gap-2 cursor-pointer">
      <input type="checkbox" id={id} name={name} onChange={checkboxHandler} />
      <label htmlFor={id}>{name}</label>
    </div>
  );
}
export default InputItem;
