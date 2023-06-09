// eslint-disable-next-line react/prop-types
export default function Step1({onInputChange}) {
    const regex = /^\d+$/

    const handleAcceptOnlyNumbers = (e) => {
        if(!regex.test(e.key)
        && e.key !== 'Backspace' 
        && e.key !== 'Delete' 
        && e.key !== 'ArrowLeft' 
        && e.key !== 'ArrowRight'
        && e.key !== ' ') {
            e.preventDefault()
        }
    }

    return (
      <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
              <label htmlFor="name" className="input-title">
                  Nome
              </label>
              <input
                    type="text"
                    id="name"
                    className="input-text"
                    placeholder="Como prefere ser chamado"
                    onChange={onInputChange}
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
                  onChange={onInputChange}
                  onKeyDown={handleAcceptOnlyNumbers}
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
                  onChange={onInputChange}
              />
          </div>
      </form>
    );
  }
