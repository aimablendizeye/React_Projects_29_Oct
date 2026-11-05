import gemini from './assets/gemini.png'
import {Search,
        LayoutGridCircles,
        MessageCircleDashedCheck,
        ImageMinus,
        Clock4,
        Bolt,
       Download,
       Sparkles,
       PencilSparkles} from 'lucide-react'



function Header () {


 return (
    <header >

     <div className='flex absolute top-2 right-8 gap-3 '>
      <div className='flex gap-3 bg-blue-950 w-fit rounded-3xl p-1'>
         <Download className='w-5 h-5 text-white'/>
         <p className=' font-semibold '>Get app</p>
      </div>
      <div className='bg-blue-700 text-black rounded-3xl p-1 flex gap-2 w-fit'>
         <Sparkles className='w-4 h-4 mt-1 ml-1 text-white'/>
         <p className='font-semibold text-white'>Upgrade</p>

      </div>
       <button className=" hover:bg-slate-800 w-fit rounded-full transition cursor-pointer">
          <PencilSparkles className="w-4 h-4 text-white" />
        </button>
     </div>
      <div className='flex flex-col gap-4  ml-4'>
         <img src={gemini} alt="" title='Open bars' className='w-5 mb-4 cursor-pointer mt-1'/>

         <button className=" hover:bg-slate-800 w-fit rounded-full transition cursor-pointer">
          <MessageCircleDashedCheck className="w-4 h-4 text-white" />
        </button>
        
         <button title="Search Charts" className="cursor-pointer hover:opacity-80">
          <Search className="w-4 h-4 text-white" />
        </button>
     
         
      <button className=" hover:bg-slate-800 w-fit rounded-full transition cursor-pointer">
          <LayoutGridCircles className="w-4 h-4 text-white" />
        </button>

      <button className=" hover:bg-slate-800 w-fit rounded-full transition cursor-pointer">
          <ImageMinus className="w-4 h-4 text-white" />
      </button>

        <button className=" hover:bg-slate-800 w-fit rounded-full transition cursor-pointer">
          <Clock4 className="w-4 h-4 text-white" />
      </button>

      <button className='hover:bg-slate-800 w-fit rounded-full transition cursor-pointer'>
         <Bolt className='w-4 h-4 text-white'/>
      </button>

      </div>
      
     
    </header>
 )

}


export default Header;