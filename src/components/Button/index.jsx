// eslint-disable-next-line react/prop-types
export default function Button( { name } ) {
    return (
        <button className="max-w-[158px] w-full h-14 rounded-md bg-purpleMid uppercase text-white font-bold hover:bg-purplelight">
            {name}
        </button>
    )
}