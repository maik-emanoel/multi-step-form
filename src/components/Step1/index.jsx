export default function Step1() {
    return (
      <>
          <div className="flex flex-col gap-1">
              <label htmlFor="name" className="input-title">
                  Nome
              </label>
              <input
                  type="text"
                  id="name"
                  className="input-text"
                  placeholder="Como prefere ser chamado"
              />
          </div>
  
          <div className="flex flex-col gap-1">
              <label htmlFor="phone-number" className="input-title">
                  Telefone
              </label>
              <input
                  type="text"
                  id="phone-number"
                  className="input-text"
                  placeholder="Digite seu número de WhatsApp"
              />
          </div>
  
          <div className="flex flex-col gap-1">
              <label htmlFor="phone-number" className="input-title">
                    E-mail
              </label>
              <input
                  type="email"
                  id="email"
                  className="input-text"
                  placeholder="Digite seu e-mail"
              />
          </div>
      </>
    );
  }
