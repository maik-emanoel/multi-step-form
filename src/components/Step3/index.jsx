// eslint-disable-next-line react/prop-types
export default function Step3( {onInputChange} ) {
    return (
      <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
              <label htmlFor="project-objectives" className="input-title">
                Objetivos do projeto
              </label>
              <textarea
                  id="project-objectives"
                  className="input-text resize-none"
                  placeholder="Descreva quais os objetivos desse projeto"
                  rows="4"
                  onChange={onInputChange}
              />
          </div>
      </form>
    );
  }