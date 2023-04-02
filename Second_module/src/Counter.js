import React, { useState } from "react";
import { ethers } from "ethers";

import contract_abi from './Contracts/Counter.json'
const contract_address = "0xCD0539bCA696d05d81fa099F5E6Ae92D03cFB1C2"; // replace with your contract address
function Counter() {
  const [count, setCount] = useState(0);


  const provider = new ethers.providers.JsonRpcProvider(); 
   	const signer = provider.getSigner(); 
      const _contract = new ethers.Contract(contract_address, contract_abi, provider); 
     const signerContract = _contract.connect(signer); 

  


  const handleIncrease = async () => {
    await signerContract.increase();
    setCount((await _contract.getCount()).toString());
  };

  const handleDecrease = async () => {
    await signerContract.decrease();
    setCount((await _contract.getCount()).toString());
  };

  const handleGetCount = async () => {
    setCount((await _contract.getCount()).toString());
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleGetCount}>Get Count</button>
    </div>
  );
}

export default Counter;