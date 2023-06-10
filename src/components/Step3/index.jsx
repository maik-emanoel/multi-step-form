export default function Step3() {
    return (
      <>
          <div className="flex flex-col gap-1">
              <label htmlFor="about" className="input-title">
                Objetivos do projeto
              </label>
              <textarea
                  id="about"
                  className="input-text resize-none"
                  placeholder="Descreva quais os objetivos desse projeto"
                  rows="4"
              />
          </div>
      </>
    );
  }