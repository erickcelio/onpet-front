import React, { useState } from "react";

import styles from "./register.module.scss";

function RegisterContainer() {
  const [step, setStep] = useState(1);

  return (
    <div className="w-full h-full">
      <div className="h-[200px] w-full bg-blue-700 text-white">
        <h1 className="text-5xl">Bem Vindo!</h1>
        <ul className={styles.stepsContainer}>
          <li className={styles.step}>1</li>
          <li className={styles.step}>2</li>
          <li className={styles.step}>3</li>
        </ul>
      </div>
    </div>
  );
}

export default RegisterContainer;
