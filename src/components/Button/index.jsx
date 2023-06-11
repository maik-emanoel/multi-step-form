// eslint-disable-next-line react/prop-types
export default function Button( { name, handleNextStep, disabled } ) {
    return (
        <button 
            className="py-4 px-8 rounded-md bg-purpleMid uppercase text-white font-bold hover:bg-purplelight disabled:cursor-not-allowed disabled:opacity-80 disabled:bg-purpleMid"
            onClick={handleNextStep}
            disabled={disabled}
        >
            {name}
        </button>
    )
}