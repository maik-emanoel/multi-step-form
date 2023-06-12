// eslint-disable-next-line react/prop-types
export default function BackButton( { name, handlePreviousStep } ) {
    return (
        <button 
            className="max-w-[158px] w-full h-14 rounded-md uppercase text-purpleMid font-bold border border-purpleMid sm:w-fit sm:py-4 sm:px-8"
            onClick={handlePreviousStep}
        >
            {name}
        </button>
    )
}