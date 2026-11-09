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

            <div className='flex pl-32'>
                <Search className='w-4 h-4 absolute top-2 '/>
                <input type="text" placeholder='search' className='border border-gray-300 pl-6 w-150 ' />
                <button className='bg-blue-600 px-4 py-1 rounded-xl text-black'>Create</button>
            </div>

            <div className='flex gap-3 pl-8 '>

            <button className='hover:bg-gray-500 w-fit rounded-full transition cursor-pointer  '>
            <Share2 className='w-4 h-4 '/>
            </button>

            <button className='hover:bg-gray-500 w-fit rounded-full transition cursor-pointer  '>
            <Bell className='w-4 h-4 '/>
            </button>

            <button className='hover:bg-gray-500 w-fit rounded-full transition cursor-pointer  '>
            <Info className='w-4 h-4 '/>
            </button>

            <button className='hover:bg-gray-500 w-fit rounded-full transition cursor-pointer  '>
            <CircleUser className='w-4 h-4 '/>
            </button>

            </div>

            

          
            
        </div>
    )
}

export default TrelloHeader;