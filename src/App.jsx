import Header from "./components/Header";
import Button from "./components/Button";
import BackButton from "./components/BackButton";

import Step1 from "./components/Step1";

export default function App() {
  const showBackButton = false;

    return (
        <div className="max-w-[592px] w-full border-[1px] border-gray-100 rounded-lg shadow-[0rem_0.4rem_1.6rem_#EAE2FD] p-8">
            <Header />
            <hr className="my-8 bg-gray-100 opacity-40" />

            <main className="flex flex-col gap-4 mb-8">
                <Step1 />
            </main>

            <div className={`flex ${showBackButton ? "justify-between" : "justify-end"}`}>
                {showBackButton && <BackButton name="Voltar" />}
                <Button name="Continuar" />
            </div>
        </div>
    );
}
