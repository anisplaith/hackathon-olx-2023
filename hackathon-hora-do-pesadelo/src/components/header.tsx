import Logo from '../assets/olx-logo.png'
import { Search, ToyBrick, LayoutGrid, MessageCircle, Bell } from 'lucide-react'
import Button from './button'

export default function Header() {
  return (
    <header className='flex flex-row h-24 items-center bg-slate-50 border-t border-b justify-around'>
      <img src={Logo} alt="olx-logo" className='w-16 h-8' />
      <div className='flex items-center p-3 rounded-lg border focus:outline focus:outline-1 focus:outline-purple-950'>
        <input type="text" placeholder='Buscar' className='bg-transparent focus:outline-none w-64' />
        <button>
          <Search color='black' />
        </button>
      </div>
      <button>
        <ToyBrick color='black' />
      </button>
      <button>
        <LayoutGrid color='black' />
      </button>
      <button>
        <MessageCircle color='black' />
      </button>
      <button>
        <Bell color='black' />
      </button>
      <Button title='Entrar' type='' />
      <Button title='Anunciar' type='orange' />
    </header>
  );
}

