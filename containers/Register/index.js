import React, { useState } from "react";
import { useRouter } from "next/router";

import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";

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
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmitFirstStep = () => {
    setCurrentStep(2);
  };

  const handleSubmitSecondStep = () => {
    setCurrentStep(3);
  };

  const handleSubmitThirdStep = () => {
    router.push("/");
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
      <div className={`w-[800px] my-8 ${currentStep !== 1 ? "hidden" : ""}`}>
        <h2 className="text-3xl font-medium text-center mb-6">
          Preencha os dados abaixo para concluir seu cadastro
        </h2>
        <FirstStep onSubmitWithSuccess={handleSubmitFirstStep} />
      </div>
      <div className={`w-[800px] my-8 ${currentStep !== 2 ? "hidden" : ""}`}>
        <div className="flex items-center justify-center relative mb-6">
          <button
            onClick={() => setCurrentStep(1)}
            className="text-xl font-bold absolute left-0"
          >
            <div className="arrow arrow-left" />
            Voltar
          </button>
          <h2 className="text-3xl font-medium text-center">
            Qual o período de funcionamento?
          </h2>
        </div>
        <SecondStep onSubmitWithSuccess={handleSubmitSecondStep} />
      </div>
      <div className={`w-[800px] my-8 ${currentStep !== 3 ? "hidden" : ""}`}>
        <div className="flex items-center justify-center relative mb-6">
          <button
            onClick={() => setCurrentStep(2)}
            className="text-xl font-bold absolute left-0"
          >
            <div className="arrow arrow-left" />
            Voltar
          </button>
          <h2 className="text-3xl font-medium text-center">
            Informações adicionais
          </h2>
        </div>
        <ThirdStep onSubmitWithSuccess={handleSubmitThirdStep} />
      </div>
    </div>
  );
}

export default RegisterContainer;
