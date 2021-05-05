import React, { useState } from "react";
import FirstStep from "./components/FirstStep";

import styles from "./register.module.scss";

const steps = [
  {
    text: "1",
    value: 1,
  },
  {
    text: "2",
    value: 2,
  },
  {
    text: "3",
    value: 3,
  },
];

function RegisterContainer() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmitFirstStep = () => {
    setCurrentStep(2);
  };

  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="flex flex-col justify-center items-center h-[200px] w-full bg-blue-700 text-white">
        <h1 className="text-5xl">Bem vindo!</h1>
        <ul className={styles.stepsContainer}>
          {steps.map((step) => (
            <li
              key={`step-${step.value}`}
              className={`${styles.step} ${
                currentStep === step.value ? styles.stepActive : ""
              }`}
            >
              {step.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[800px] my-8">
        <h2 className="text-3xl font-medium text-center mb-6">
          Preencha os dados abaixo para concluir seu cadastro
        </h2>
        <FirstStep onSubmitWithSuccess={handleSubmitFirstStep} />
      </div>
    </div>
  );
}

export default RegisterContainer;
