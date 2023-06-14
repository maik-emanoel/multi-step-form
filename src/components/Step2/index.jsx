// eslint-disable-next-line react/prop-types
export default function Step2( {onInputChange} ) {
    return (
      <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
              <label htmlFor="company-name" className="input-title">
                  Nome da empresa
              </label>
              <input
                  type="text"
                  id="company-name"
                  className="input-text"
                  placeholder="Qual é o nome da empresa"
                  onChange={onInputChange}
              />
          </div>
  
          <div className="flex flex-col gap-1">
              <label htmlFor="employees-number" className="input-title">
                  Número de funcionários
              </label>
              <input
                  type="number"
                  id="employees-number"
                  className="input-text"
                  placeholder="Digite o número de colaboradores"
                  onChange={onInputChange}
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
                  onChange={onInputChange}
              />
          </div>
      </form>
    );
  }