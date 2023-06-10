import chevronRight from "../../assets/chevronRight.svg";
import successIcon from "../../assets/successIcon.svg"

// eslint-disable-next-line react/prop-types
export default function Header( {currentStep} ) {

  function getStepClasses(stepNumber) {
    let classes = "w-7 h-7 flex items-center justify-center rounded-full text-sm additionalFont"

    if(currentStep < stepNumber) {
      classes += " disabled"
    } else if (currentStep === stepNumber) {
      classes += " select"
    } else {
      classes += " active"
    }

    return classes
  }

  return (
    <div className="flex justify-between items-center h-11 font-bold">
      <div className="flex gap-2 items-center px-2">
        <span className={getStepClasses(1)}>
          {currentStep > 1 ? <img src={successIcon} alt="Ícone de sucesso" /> : 1}
        </span>
        <p className="text-gray-400">Contato</p>
      </div>

      <img src={chevronRight} alt="Seta para a direita" className="w-5 h-5" />

      <div className="flex gap-2 items-center px-2">
        <span className={getStepClasses(2)}>
          {currentStep > 2 ? <img src={successIcon} alt="Ícone de sucesso" /> : 2}
        </span>
        <p className="text-gray-400">Empresa</p>
      </div>

      <img src={chevronRight} alt="Seta para a direita" className="w-5 h-5" />

      <div className="flex gap-2 items-center px-2">
        <span className={getStepClasses(3)}>
          {currentStep > 3 ? <img src={successIcon} alt="Ícone de sucesso" /> : 3}
        </span>
        <p className="text-gray-400">Projeto</p>
      </div>
    </div>
  );
}
