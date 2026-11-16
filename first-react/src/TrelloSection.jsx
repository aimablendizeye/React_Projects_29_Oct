import {SquareKanbanPlus,
        SquareKanban,
        Activity,
        LockKeyhole,
        SquarePen,
        User,
    ChevronDown,
    Star
    } from 'lucide-react';
 import {useState} from 'react'   
 import city1 from './assets/city1.png' 
 import city2 from './assets/city2.png' 
 import Detail from './Detail';     

function TrelloSection ({ onFeatureClick }) {
         const [showDetail, setShowDetail] = useState(false);
 
    return (

    <>
    <div className='flex text-[#C5C6C9]' >

            <div className='flex  pt-16 flex-col pl-12 gap-2 text-gray-200'>
             <div className='flex gap-4 hover:bg-[#2C2C2E] px-2 py-1 rounded cursor-pointer'>
                <SquareKanban className='w-3 h-3 mt-1'/>
                <p className='text-sm'>Boards</p>
            </div>
            <div className='flex gap-4 hover:bg-[#2C2C2E] px-2 py-1 w-63 rounded cursor-pointer'>
                <SquareKanbanPlus className='w-3 h-3 mt-1'/>
                <p className='text-sm'>Templates</p>
            </div>
            <div className='flex gap-4 hover:bg-[#2C2C2E] px-2 py-1 rounded cursor-pointer'>
                <Activity className='w-3 h-3 mt-1'/>
                <p className='text-sm'>Home</p>
            </div>

            </div>

            <div className='absolute top-16 left-90 flex gap-3 '>
                <button className='text-5xl text-black bg-[#E56952] px-4 py-2 rounded-sm'>A</button>
                <div className='flex flex-col gap-1'>
                    <h2>Aimable Ndizeye's workspace</h2>

                    <div className='flex gap-1 text-gray-400'>
                        <LockKeyhole  className='w-4 h-4 '/>
                        <p className='text-sm'>Privacy</p>
                    </div>
  
                </div>
                <div className='text-gray-400'>
                   <SquarePen className='w-5 h-5 pt-1 '/> 

                </div>
            </div>
           
        </div>

        <div className='flex gap-10 text-sm'>

         <div  onClick={() => setShowDetail(!showDetail)} className='ml-12 mt-8 flex flex-col gap-2'>
            <p className=''>Workspaces</p>
            <div className='flex gap-3 bg-[#1C2B42] w-fit  rounded px-2 py-1 cursor-pointer'>
                <button  className='text-sm text-black font-bold bg-[#E56952]  rounded w-fit h-fit px-3 py-1 mt-2'>A</button>

                <div className='flex flex-col text-[#669CF0] text-sm'>
                    <h4>Aimable Ndizeye's </h4>
                    <h4>workspace</h4>
                </div>

                <div className='pl-12 '>
                    <ChevronDown className='w-5 h-5 text-[#669CF0] mt-2 '/>
                </div>
                
            </div>
            <Detail isVisible={showDetail} />

            

        </div>

        <div className='flex flex-col gap-2 cursor-pointer'>
            <div className='flex gap-2'>
                 <User className='w-5 h-5'/>
                 <p>Your Boards</p>
            </div>
            <div className='flex gap-4'>

              <div className='relative '>
                <img src={city1} alt="" onClick={onFeatureClick} className='w-50 h-30 rounded-t-sm shadow-md peer' />

                <div className=' absolute top-20  bg-[#1F1F21] w-50 h-10 '>
                      <p className='pl-4 pt-2 text-sm'>React Project</p>
                </div>

                
                <Star className='hidden peer-hover:block w-5 h-5 absolute top-3 right-3 text-black'/>
                
             </div>


             <div className='relative'>
                <img src={city2} alt="" onClick={onFeatureClick} className='w-50 h-30 rounded-t-sm shadow-md' />

                <div className=' absolute top-20  bg-[#1F1F21] w-50 h-10 '>
                      <p className='pl-4 pt-2 text-sm'>Website Project</p>
                </div>
            </div>

             <div className='relative'>
                <img src={city1}  alt="" onClick={onFeatureClick} className='w-50 h-30 rounded-t-sm shadow-md' />

                <div className=' absolute top-20  bg-[#1F1F21] w-50 h-10 '>
                      <p className='pl-4 pt-2 text-sm'>TypeScript learning </p>
                </div>
            </div>

              <div className='relative'>
                <img src={city2} alt="" onClick={onFeatureClick} className='w-50 h-30 rounded-t-sm shadow-md' />

                <div className=' absolute top-20  bg-[#1F1F21] w-50 h-10 '>
                      <p className='pl-4 pt-2 text-sm'>Final Project</p>
                </div>
            </div>
       
           </div>         
        </div>

        </div>

        
    </>
        

        
    )
}

export default TrelloSection;