import { useState } from "react";
import FileSelector from "../components/FileSelector/FileSelector";
import HeaderSelector from "../components/HeaderSelector/HeaderSelector";

export default function Home() {
  const [validHeader, setValidHeader] = useState<string[]>([]);
  return (
    <>
      <HeaderSelector
        validHeader={validHeader}
        setValidHeader={setValidHeader}
      />
      <FileSelector />
    </>
  );
}
