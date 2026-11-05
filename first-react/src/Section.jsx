


import {Pencil,CornerDownRight,Orbit,Plus,ChevronDown,Mic} from 'lucide-react'

function Section () {


    return (
        <div className='ml-72 h-full flex flex-col item-center justify-center gap-4 absolute top-0'>
            <h1 className='px-20 text-2xl font-bold'>Where should we start?</h1>
            <div className='text-white bg-[#171717] flex  w-fit px-30 py-3 mt-6 rounded-3xl cursor-text '>
                <Plus className='w-6 h-6 absolute left-2  text-white' />
                <p className='absolute left-9'>Ask Gemini</p>
                <div className='flex flex-col'>

                < p className='ml-44'>Gemini <span className='text-gray-400'>Auto</span></p>
                <ChevronDown className='w-4 h-4 absolute right-24 mt-1 text-white ' />
                <Mic className='w-4 h-4 absolute right-12 mt-1  text-white' />

                </div>
               
            </div>

            <div className='flex flex-col mt-4 gap-3 ml-8'>
            <div className='flex  gap-4'>
                <Pencil className='w-4 h-4 mt-1'/>
                <p>Write a letter to my future self</p>
            </div>
            <div className='flex  gap-4'>
                 <CornerDownRight className='w-4 h-4 mt-1'/>
                <p>Create an image of a floating astronant</p>
            </div>
            <div className='flex  gap-4'>
               <Orbit className='w-4 h-4 mt-1'/>
                <p>Plan a bdy party that matches my style</p>
            </div>

            </div>

          


        </div>

    )
}

export default Section;