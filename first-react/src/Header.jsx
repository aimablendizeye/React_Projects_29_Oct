import gemini from './assets/gemini.png'
import chart from './assets/icons8-chat-room-50.png'
import search  from './assets/search.png'
import square from './assets/square-graphic-of-four-lines-and-four-circles-on-the-corners.png'
import photo from './assets/photo.png'
import schedule from './assets/clock.png'
import customise from './assets/customisation.png'
import download from './assets/download.png'
import version from './assets/clock.png'
import {Search} from 'lucide-react'



function Header () {


 return (
    <header >

     <div className='flex absolute top-2 right-16 gap-6 '>
      <div className='flex gap-3 bg-blue-950 w-fit rounded-3xl p-2'>
         <img src={download} alt="" className='w-5 h-5 ' />
         <p className=' font-semibold '>Get app</p>
      </div>
      <div className='bg-blue-500 text-black rounded-3xl p-2 flex gap-3 w-fit'>
         <img src={gemini} alt="" className='w-4' />
         <p className='font-semibold text-white'>Upgrade</p>

      </div>
      <div>
         <img src="" alt="" />
      </div>
     </div>
      <div className='flex flex-col gap-4  ml-4'>
         <img src={gemini} alt="" title='Open bars' className='w-5 mb-4 cursor-pointer mt-1'/>
         <img src={chart} alt="" title='New Chart' className='w-5 cursor-pointer'/>
         <img src={search} alt="" title='Search Charts' className='w-5 cursor-pointer'/> 
         {/* <div title="Search Charts" className="cursor-pointer hover:opacity-80">
          <Search className="w-5 h-5 text-white" />
        </div>
      */}
         
         <img src={square} alt="" title='Library' className='w-5 cursor-pointer'/>
         <img src={photo} alt="" title='Images' className='w-5 cursor-pointer'/>
         <img src={schedule} alt="" title='Schedulers' className='w-5 cursor-pointer'/>
         <img src={customise} alt="" title='Customize' className='w-5 cursor-pointer'/>
      </div>
     
    </header>
 )

}


export default Header;