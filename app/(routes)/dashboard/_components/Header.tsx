import { Button } from '@/components/ui/button';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Search, Send } from 'lucide-react'
import Image from 'next/image'
import React, {useState} from 'react'
import { LayoutGrid } from 'lucide-react';

function Header() {
    const {user}:any=useKindeBrowserClient();
    // const [search, setSearch] = useState('');
  return (
    <div className='flex w-full justify-end gap-2 items-center bg-pink-600 p-4 rounded-lg'>
      
    <Button variant='outline'
        className=' 
          gap-2 font-bold mr-96 bg-gray-100'>
            <LayoutGrid className='h-5 w-5'/>
            All Files</Button>
          
        <div className='flex gap-2 items-center border rounded-md p-1 bg-white'>
            <Search className='h-4 w-4 bg-white '/>
            <input type='text' placeholder='Search'/>
        </div>
        <div>
            <Image src={user?.picture} alt='user'
            width={30}
            height={30}
            className='rounded-full bg-white justify-end'
            />
        </div>
        <Button className='gap-2 flex text-sm
        h-8 hover:bg-white bg-black hover:text-black text-white
        '> <Send className='h-4 w-4 '/> Invite</Button>
    </div>
  )
}

export default Header