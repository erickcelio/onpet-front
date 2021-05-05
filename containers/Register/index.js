import React, { useState } from "react";

function RegisterContainer() {
  const [step, setStep] = useState(1);

  return (
    <div className="w-full h-full">
      <div className="h-[200px] w-full bg-blue-700 text-white">
        <h1 className="text-5xl">Bem Vindo!</h1>
      </div>
    </div>
  );
}

export default RegisterContainer;
