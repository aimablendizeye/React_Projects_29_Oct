import gemini from './assets/gemini.png'
import {Search,
        LayoutGridCircles,
        MessageCircleDashedCheck,
        ImageMinus,
        Clock4,
        Bolt,
       Download,
       Sparkles,
       PencilSparkles,
       Settings,
       CircleUserRound} from 'lucide-react'



function Header () {


 return (
    <header >
     <div className='flex absolute top-2 right-8 gap-3 '>
      <div className='flex gap-3 bg-[#171717] w-fit rounded-3xl p-1 justify-center items-center'>
         <Download className='w-3 h-3 mt-1 ml-2 text-white'/>
         <p className=' text-sm mr-1 '>Get app</p>
      </div>
      <div className='bg-[#1F3B9B] text-black rounded-3xl p-1 flex gap-2 w-fit'>
         <Sparkles className='w-3 h-3 mt-1 ml-1 text-white'/>
         <p className='text-sm text-white mr-1'>Upgrade</p>

      </div>
       <button className=" hover:bg-slate-800 w-fit rounded-full transition cursor-pointer">
          <PencilSparkles className="w-3 h-3 text-white" />
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

       <button className='hover:bg-slate-800 w-fit rounded-full transition cursor-pointer absolute bottom-20'>
         <Settings className='w-4 h-4 text-white'/>
      </button>

       <button className='hover:bg-slate-800 bg-[#1F3B9B] w-fit rounded-full transition cursor-pointer absolute bottom-12 left-3'>
         <CircleUserRound className='w-6 h-6 '/>
      </button>

      </div>
      
     
    </header>
 )

}


export default Header;