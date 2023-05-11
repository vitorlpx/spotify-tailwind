import Image from 'next/image'
import {ChevronLeft, ChevronRight, Play} from 'lucide-react'

export default function Main() {
    return (
      <main className='flex-1 p-6'>
            <div className='flex items-center justi gap-3'>
              <button className='rounded-full bg-black/40 p-1'>
                <ChevronLeft />
              </button>
              <button className='rounded-full bg-black/40 p-1'>
                <ChevronRight />
              </button>
            </div>
  
            <h1 className='font-bold  text-4xl mt-10'>Boa tarde</h1>
  
            <div className='grid grid-cols-3 gap-6 mt-5'>
              <a className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
                <Image src={'/icarus.jpeg'} width={105} height={105} alt='capa do album' />
                <strong>Icarus</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button>
              </a>
              <a className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
                <Image src={'/lider em movimento.jpg'} width={105} height={105} alt='capa do album' />
                <strong>O Líder em Movimento</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button>
              </a>
              <a className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
                <Image src={'/calzone.jpg'} width={105} height={105} alt='capa do album' />
                <strong>Calzone</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button>
              </a>
              <a className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
                <Image src={'/contradições.jpg'} width={105} height={105} alt='capa do album' />
                <strong>Contradições</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button>
              </a>
              <a className='bg-white/5 group rounded-md flex items-center gap-4 overflow- hover:bg-white/20 transition-colors'>
                <Image src={'/dos predios.jpg'} width={105} height={105} alt='capa do album' /> 
                <strong>Dos Prédios</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button>
              </a>
              <a className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
                <Image src={'/237 yunk vino.png'} width={105} height={105} alt='capa do album' />
                <strong>237</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button> 
              </a>
            </div>
  
            <h2 className='font-bold  text-3xl mt-10'>Feito para você</h2>
  
            <div className='grid grid-cols-7 gap-4 mt-4'>
              <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <Image src={'/icarus.jpeg'} className='w-full' width={105} height={105} alt='capa do album' />
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, assumenda.</span>
              </a>
              <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <Image src={'/237 yunk vino.png'} className='w-full' width={105} height={105} alt='capa do album' />
                <strong className='font-semibold'>Daily Mix 2</strong>
                <span className='text-sm text-zinc-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, assumenda.</span>
              </a>
              <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <Image src={'/dos predios.jpg'} className='w-full' width={105} height={105} alt='capa do album' />
                <strong className='font-semibold'>Daily Mix 3</strong>
                <span className='text-sm text-zinc-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, assumenda.</span>
              </a>
              <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <Image src={'/lider em movimento.jpg'} className='w-full' width={105} height={105} alt='capa do album' />
                <strong className='font-semibold'>Daily Mix 4</strong>
                <span className='text-sm text-zinc-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, assumenda.</span>
              </a>
              <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <Image src={'/contradições.jpg'} className='w-full' width={105} height={105} alt='capa do album' />
                <strong className='font-semibold'>Daily Mix 5</strong>
                <span className='text-sm text-zinc-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, assumenda.</span>
              </a>
            </div>
          </main>
    )
  }