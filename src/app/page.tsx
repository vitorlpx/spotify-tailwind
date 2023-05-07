import Image from 'next/image'
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume2, Maximize2} from 'lucide-react'

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <aside className='w-72 bg-zinc-950 p-6'>
          
          <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-red-500 rounded-full'></div>
              <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
              <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>
          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Trap</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Funk</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hip-hop</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Rap</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Reggae</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Rock</a>
          </nav>

        </aside>
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
      </div>

      <footer className='bg-zinc-800 boder-t border-zinc-700 px-6 py-5 flex items-center justify-between '>
        <div className='flex items-center gap-3 '>
          <Image src={'/calzone.jpg'} width={56} height={56} alt='capa do album' />
          <div className='flex flex-col'>
            <strong className='font-normal hover:underline'>Bonde da fumaça</strong>
            <span className='text-xs text-zinc-400'>Recayd Mob</span>
          </div>
        </div>

        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-green-500 ' />
            <SkipBack size={20} className='text-zinc-200'/>
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
              <Play />
            </button>
            <SkipForward size={20} className='text-zinc-200'/>
            <Repeat size={20} className='text-zinc-200'/>
          </div>

          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-400'>3:14</span>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className='flex items-center gap-2'>
            <Volume2 size={20}/>
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
            </div>
          </div>
          <Maximize2 size={20}/>
        </div>

      </footer>
    </div>
  )
}
