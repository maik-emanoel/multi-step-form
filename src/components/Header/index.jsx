import chevronRight from '../../assets/chevronRight.svg'

export default function Header() {
  return (
    <div className='flex justify-between items-center h-11 font-bold'>
        <div className='flex gap-2 items-center'>
            <span className='w-7 h-7 flex items-center justify-center rounded-full'>1</span>
            <p className='text-gray-400'>Contato</p>
        </div>

        <img src={chevronRight} alt="Seta para a direita" className='w-5 h-5' />

        <div className='flex gap-2 items-center'>
            <span className='w-7 h-7 flex items-center justify-center rounded-full'>2</span>
            <p className='text-gray-400'>Empresa</p>
        </div>

        <img src={chevronRight} alt="Seta para a direita" className='w-5 h-5' />

        <div className='flex gap-2 items-center'>
            <span className='w-7 h-7 flex items-center justify-center rounded-full'>3</span>
            <p className='text-gray-400'>Projeto</p>
        </div>
    </div>
  );
}
