import {SquareKanbanPlus,
        SquareKanban,
        Activity,
        LockKeyhole,
        SquarePen,
        User,
    ChevronDown
    } from 'lucide-react';
 import city1 from './assets/city1.png' 
 import city2 from './assets/city2.png'      

function TrelloSection () {
        

    return (

    <>
    <div className='flex' >

            <div className='flex  pt-36 flex-col pl-12 gap-6 text-gray-200'>
                 <div className='flex gap-2'>
                <SquareKanban className='w-3 h-3 mt-1'/>
                <p className='text-sm'>Boards</p>
            </div>
            <div className='flex gap-2'>
                <SquareKanbanPlus className='w-3 h-3 mt-1'/>
                <p className='text-sm'>Templates</p>
            </div>
            <div className='flex gap-2'>
                <Activity className='w-3 h-3 mt-1'/>
                <p className='text-sm'>Home</p>
            </div>

            </div>

            <div className='absolute top-36 left-90 flex gap-3 '>
                <button className='text-5xl text-black bg-[#E56952] px-4 py-2 rounded-sm'>A</button>
                <div className='flex flex-col gap-3'>
                    <h2>Aimable Ndizeye's workspace</h2>

                    <div className='flex gap-2 text-gray-400'>
                        <LockKeyhole  className='w-5 h-5 '/>
                        <p>Privacy</p>
                    </div>
  
                </div>
                <div className='text-gray-400'>
                   <SquarePen className='w-5 h-5 pt-1 '/> 

                </div>
            </div>
           
        </div>

        <div className='flex gap-10'>

            <div className='ml-12 mt-8 flex flex-col gap-2 bg-[#1C2B42] w-74 h-20 rounded-sm px-2 pb-2 '>
            <p className='text-sm'>Workspaces</p>
            <div className='flex gap-3'>
                <button className='text-lg text-black bg-[#E56952] w-fit px-4  rounded-sm'>A</button>

                <div className='flex flex-col text-[#669CF0] text-sm'>
                    <h4>Aimable Ndizeye's </h4>
                    <h4>workspace</h4>
                </div>

                <div className='pl-12'>
                    <ChevronDown className='w-5 h-5 '/>
                </div>
                
            </div>

        </div>

        <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
                 <User className='w-5 h-5'/>
                 <p>Your Boards</p>
            </div>
            <div className='flex gap-4'>

              <div className='relative'>
                <img src={city1} alt="" className='w-50 h-30 rounded-sm shadow-md' />

                <div className=' absolute top-20 rounded-sm bg-[#1F1F21] w-50 h-10 '>
                      <p className='pl-4 pt-2 text-sm'>Aimable Ndizeye</p>
                </div>
             </div>


             <div className='relative'>
                <img src={city2} alt="" className='w-50 h-30 rounded-sm shadow-md' />

                <div className=' absolute top-20 rounded-sm bg-[#1F1F21] w-50 h-10 '>
                      <p className='pl-4 pt-2 text-sm'>Aimable Ndizeye</p>
                </div>
            </div>

             <div className='relative'>
                <img src={city1} alt="" className='w-50 h-30 rounded-sm shadow-md' />

                <div className=' absolute top-20 rounded-sm bg-[#1F1F21] w-50 h-10 '>
                      <p className='pl-4 pt-2 text-sm'>Aimable Ndizeye</p>
                </div>
            </div>

              <div className='relative'>
                <img src={city2} alt="" className='w-50 h-30 rounded-sm shadow-md' />

                <div className=' absolute top-20 rounded-sm bg-[#1F1F21] w-50 h-10 '>
                      <p className='pl-4 pt-2 text-sm'>Aimable Ndizeye</p>
                </div>
            </div>

        


            </div>

           

    
           

        </div>

        </div>

        
    </>
        

        
    )
}

export default TrelloSection;