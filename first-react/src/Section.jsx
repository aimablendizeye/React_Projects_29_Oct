import plus  from './assets/add.png'
import pen  from './assets/edit-text.png'
import create  from './assets/magic-wand.png'
import plan from './assets/planning.png'

function Section () {


    return (
        <div className='ml-72 h-full flex flex-col item-center justify-center gap-4 absolute top-0'>
            <h1 className='px-20 text-3xl font-bold'>Where Should we Start?</h1>
            <div className='text-white bg-gray-600 flex  w-fit px-40 py-3 rounded-3xl cursor-text '>
                <img src={plus} alt="adding icon" className='w-6 absolute left-2 cursor-pointer' />
                <p className='absolute left-9'>Ask Gemini</p>
                <p className='ml-44'>Gemini</p>
                <img src="" alt="" />
                <img src="" alt="" />
            </div>

            <div className='flex flex-col mt-4 gap-5'>
            <div className='flex  gap-4'>
                <img src={pen} alt="" className='w-5' />
                <p>Write a letter to my future self</p>
            </div>
            <div className='flex  gap-4'>
                 <img src={create} alt="" className='w-5'/>
                <p>Create an image of a floating astronant</p>
            </div>
            <div className='flex  gap-4'>
                 <img src={plan} alt="" className='w-5' />
                <p>Plan a bdy party that matches my style</p>
            </div>

            </div>

          


        </div>

    )
}

export default Section;