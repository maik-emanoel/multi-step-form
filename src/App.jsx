import Header from "./components/Header";
import Button from "./components/Button";
import BackButton from "./components/BackButton";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import { useState } from "react";

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [step1Filled, setStep1Filled] = useState(false);
  const [step2Filled, setStep2Filled] = useState(false);
  const [step3Filled, setStep3Filled] = useState(false)
  const [responseSent, setResponseSent] = useState(false);

  const handleStep1InputChange = () => {
    const nameInput = document.getElementById("name").value;
    const phoneNumberInput = document.getElementById("phone-number").value;
    const emailInput = document.getElementById("email").value;

    const isStep1Filled = nameInput && phoneNumberInput && emailInput;
    setStep1Filled(isStep1Filled);
  };

  const handleStep2InputChange = () => {
    const companyNameInput = document.getElementById("company-name").value;
    const employeesNumberInput =
      document.getElementById("employees-number").value;
    const aboutInput = document.getElementById("about").value;

    const isStep2Filled =
      companyNameInput && employeesNumberInput && aboutInput;
    setStep2Filled(isStep2Filled);
  };

  const handleStep3InputChange = () => {
    const projectObjectivesInput = document.getElementById('project-objectives')
    const isStep3Filled = projectObjectivesInput

    setStep3Filled(isStep3Filled)
  }

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    setStep1Filled(false);
    setStep2Filled(false);
    setStep3Filled(false)
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleResponseSubmit = () => {
    setResponseSent(true);
  };

  const SuccessMessage = () => {
    return (
        <h2 className="font-bold text-lg text-gray-400 flex gap-2 justify-center items-center">
          <span className="w-[2px] h-5 bg-purpleMid"></span>
          Resposta enviada com sucesso!
        </h2>
    )
  };

  return (
    <div className="max-w-[592px] w-full border-[1px] border-gray-100 rounded-lg shadow-[0rem_0.4rem_1.6rem_#EAE2FD] p-8 md:w-[95%] sm:px-4 sm:shadow-none">
      {responseSent ? (
        <SuccessMessage />
      ) : (
        <>
          <Header currentStep={currentStep} />
          <hr className="my-8 bg-gray-100 opacity-40" />

          <main className="flex flex-col gap-4 mb-8">
            {currentStep === 1 && (
              <Step1 onInputChange={handleStep1InputChange} />
            )}
            {currentStep === 2 && (
              <Step2 onInputChange={handleStep2InputChange} />
            )}
            {currentStep === 3 && <Step3 onInputChange={handleStep3InputChange} />}
          </main>

          <div
            className={`flex ${
              currentStep > 1 ? "justify-between" : "justify-end"
            }`}
          >
            {currentStep > 1 && (
              <BackButton
                name="Voltar"
                handlePreviousStep={handlePreviousStep}
              />
            )}
            {currentStep === 3 ? (
              <Button
                name="Enviar Resposta"
                handleNextStep={handleResponseSubmit}
                disabled={currentStep === 3 && !step3Filled}
              />
            ) : (
              <Button
                name="Continuar"
                handleNextStep={handleNextStep}
                disabled={
                  (currentStep === 1 && !step1Filled) ||
                  (currentStep === 2 && !step2Filled)
                }
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
