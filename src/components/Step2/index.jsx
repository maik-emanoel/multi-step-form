export default function Step2() {
    return (
      <>
          <div className="flex flex-col gap-1">
              <label htmlFor="company-name" className="input-title">
                  Nome da empresa
              </label>
              <input
                  type="text"
                  id="company-name"
                  className="input-text"
                  placeholder="Qual é o nome da empresa"
              />
          </div>
  
          <div className="flex flex-col gap-1">
              <label htmlFor="employees-number" className="input-title">
                  Número de funcionários
              </label>
              <input
                  type="text"
                  id="employees-number"
                  className="input-text"
                  placeholder="Digite o número de colaboradores"
              />
          </div>
  
          <div className="flex flex-col gap-1">
              <label htmlFor="about" className="input-title">
                  Sobre seu negócio
              </label>
              <textarea
                  id="about"
                  className="input-text resize-none"
                  placeholder="Fale um pouco sobre seus produtos ou serviços"
                  rows="5"
              />
          </div>
      </>
    );
  }