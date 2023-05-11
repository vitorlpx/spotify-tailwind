import {Home as HomeIcon, Search, Library} from 'lucide-react'

export default function Sidebar() {
    return (
        <aside className='w-72 bg-zinc-950 p-6'>
          
        <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
        </div>
        <nav className='bg-zinc-900 p-4 rounded-lg space-y-5 mt-4'>
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

        <nav className='bg-zinc-900 p-4 mt-4 h-96 rounded-lg  flex flex-col gap-3'>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Trap</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Funk</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hip-hop</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Rap</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Reggae</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Rock</a>
        </nav>

      </aside>
    )
}
