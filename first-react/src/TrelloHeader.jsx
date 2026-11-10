 import {Search,LayoutGridCircles,Share2,Bell,Info,CircleUser} from 'lucide-react'
 import trello from './assets/trello.png'


function TrelloHeader () {

    return (
        <div className='flex gap-3 absolute top-4 '>
            <div className='flex gap-3 pt-2 pl-2 '>
                <LayoutGridCircles className='w-5 h-5'/>
                <img src={trello} className='w-5 h-5' />
                <p>Trello</p>
            </div>

            <div className='flex pl-32 gap-3'>
                <Search className='w-4 h-4 absolute top-2 '/>
                <input type="text" placeholder='search' className='border border-gray-400 rounded-sm pl-6 w-150 ' />
                <button className='bg-[#669DF1] px-4 py-1 rounded-md text-black'>Create</button>
            </div>

            <div className='flex gap-3 pl-40 '>

            <button className='hover:bg-gray-500 w-fit rounded-full transition cursor-pointer  '>
            <Share2 className='w-4 h-4 '/>
            </button>

            <button className='hover:bg-gray-500 w-fit rounded-full transition cursor-pointer  '>
            <Bell className='w-4 h-4 '/>
            </button>

            <button className='hover:bg-gray-500 w-fit rounded-full transition cursor-pointer  '>
            <Info className='w-4 h-4 '/>
            </button>

            <button className='hover:bg-gray-500 w-fit rounded-full transition cursor-pointer absolute -right-8 top-1  bg-[#00A3BF]'>
            <CircleUser  className='w-5 h-6   '/>
            </button>

            </div>

            

          
            
        </div>
    )
}

export default TrelloHeader;