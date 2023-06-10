import Header from "./components/Header";
import Button from "./components/Button";
import BackButton from "./components/BackButton";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import { useState } from "react";

export default function App() {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1)
  }

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1)
    console.log("Próxima etapa");
  }

    return (
        <div className="max-w-[592px] w-full border-[1px] border-gray-100 rounded-lg shadow-[0rem_0.4rem_1.6rem_#EAE2FD] p-8">
            <Header currentStep={currentStep} />
            <hr className="my-8 bg-gray-100 opacity-40" />

            <main className="flex flex-col gap-4 mb-8">
                {currentStep === 1 && <Step1 />}
                {currentStep === 2 && <Step2 />}
                {currentStep === 3 && <Step3 />}
            </main>

            <div className={`flex ${currentStep > 1 ? "justify-between" : "justify-end"}`}>
                {currentStep > 1 && (
                    <BackButton name="Voltar" handlePreviousStep={handlePreviousStep} />
                )}
                {currentStep === 3 
                    ? <Button name="Enviar Resposta" /> 
                    : <Button name="Continuar" handleNextStep={handleNextStep} 
                />}
            </div>
        </div>
    );
}
