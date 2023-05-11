import Image from 'next/image'
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume2, Maximize2} from 'lucide-react'
import Sidebar from './components/sidebar/sidebar'
import Main from './components/main/main'
import Footer from './components/footer/footer'

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <Sidebar />
        <Main />
      </div>

      <Footer />
    </div>
  )
}
