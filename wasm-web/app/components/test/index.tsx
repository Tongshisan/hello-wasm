'use client'
import { FunctionComponent } from "react";
import { greet } from '@tongshisan/hello-wasm';


interface WasmTestProps {

}

const WasmTest: FunctionComponent<WasmTestProps> = () => {

  const handleClick = () => {
    greet('tongshisan')
  };

  return (
    <div onClick={handleClick}></div>
  );
}

export default WasmTest;
