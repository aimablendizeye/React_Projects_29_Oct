 import {Search,LayoutGridCircles,Share2,Bell,Info,CircleUser} from 'lucide-react'
 import trello from './assets/trello.png'


function TrelloHeader () {

    return (
        <div className='flex gap-3 absolute text-white  '>
            <div className='flex gap-3   '>
                <LayoutGridCircles className='w-5 h-5 mt-4 ml-2 hover:bg-[#2C2C2E] cursor-pointer rounded '/>
                <div className='hover:bg-[#2C2C2E] mt-3 cursor-pointer p-1 flex gap-2 rounded'>
                       <img src={trello} className='w-5 h-5 ' />
                       <p>Trello</p>
                </div>
              
            </div>

            <div className='flex pl-32 gap-3'>
                <Search className='w-4 h-4 absolute top-2 '/>
                <input placeholder='search' className='border border-gray-400 rounded-sm pl-6 w-150 ' />
                <button className='bg-[#669DF1] px-4 py-1 rounded-md text-black'>Create</button>
            </div>

            <div className='flex gap-3 pl-36 '>

            <button className='hover:bg-gray-600 w-fit rounded  px-1 transition cursor-pointer  '>
            <Share2 className='w-4 h-4 '/>
            </button>

            <button className='hover:bg-gray-600 w-fit rounded  px-1 transition cursor-pointer  '>
            <Bell className='w-4 h-4 '/>
            </button>

            <button className='hover:bg-gray-600 w-fit rounded  px-1 transition cursor-pointer  '>
            <Info className='w-4 h-4 '/>
            </button>

            <button className='hover:bg-gray-600 w-fit rounded-full  px-1 transition cursor-pointer absolute -right-8 top-1  bg-[#00A3BF]'>
            <CircleUser  className='w-5 h-6   '/>
            </button>

            </div>

        
        </div>
    )
}

export default TrelloHeader;