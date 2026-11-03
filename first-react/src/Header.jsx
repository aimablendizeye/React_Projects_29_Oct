import gemini from './assets/gemini.png'
import chart from './assets/icons8-chat-room-50.png'
import search  from './assets/search.png'
import square from './assets/square-graphic-of-four-lines-and-four-circles-on-the-corners.png'
import photo from './assets/photo.png'
import schedule from './assets/clock.png'
import customise from './assets/customisation.png'
import download from './assets/download.png'
import version from './assets/clock.png'


function Header () {

 return (
    <header >

     <div className='flex absolute top-2 right-6 gap-6 '>
      <div className='flex gap-3 bg-gray-700 w-fit rounded-3xl'>
         <img src={download} alt="" className='w-5 h-6 mt-2' />
         <p className='mt-1 font-bold '>Get app</p>
      </div>
      <div className='bg-blue-500 text-black rounded-3xl p-1 flex gap-3 w-fit'>
         <img src={version} alt="" className='w-4' />
         <p className='text-lg font-bold'>Upgrade</p>

      </div>
     </div>
      <div className='flex flex-col gap-4  ml-4'>
         <img src={gemini} alt="" title='Open bars' className='w-5 mb-4 cursor-pointer mt-1'/>
         <img src={chart} alt="" title='New Chart' className='w-5 cursor-pointer'/>
         <img src={search} alt="" title='Search Charts' className='w-5 cursor-pointer'/>
         <img src={square} alt="" title='Library' className='w-5 cursor-pointer'/>
         <img src={photo} alt="" title='Images' className='w-5 cursor-pointer'/>
         <img src={schedule} alt="" title='Schedulers' className='w-5 cursor-pointer'/>
         <img src={customise} alt="" title='Customize' className='w-5 cursor-pointer'/>
      </div>
     
    </header>
 )

}


export default Header;