'use client'
import { FunctionComponent } from "react";
// import { greet } from '@tongshisan/hello-wasm';


interface WasmTestProps {

}

export default function Page() {
  const handleClick = () => {
    // greet('tongshisan')
  };

  return (
    <div onClick={handleClick}>
      <h1>wasm</h1>
    </div>
  );
}
