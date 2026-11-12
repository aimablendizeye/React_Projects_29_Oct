
import {Kanban,
        ChevronDown,
        User,
        Plug,
        Zap,
        ListFilter,
        Star,
        Globe,
        UserPlus,
        Ellipsis,
        Inbox,
      NotepadText,
       Dices,
      Plus,
     SquareKanbanPlus} from 'lucide-react'
import Dissert from './assets/Dissert.png'
import TrelloHeader from "./TrelloHeader"

function Board () {


 return (

    <>

    <TrelloHeader/>


    <div  style={{ backgroundImage: `url(${Dissert})` }}
      className='min-h-screen bg-cover bg-center bg-no-repeat pt-12'>

        <div className='flex  backdrop-blur-sm bg-black/30 px-2 py-2 text-white '>
            <div className='flex gap-2 pt-4 '>
             <p>Aimable Ndizeye</p>
             <Kanban className='w-5 h-5'/> 
             <ChevronDown className='w-5 h-5'/>
            </div>

            <div className='absolute right-5 flex gap-3 pt-4'>
                <User className='w-5 h-5 hover:bg-gray-600  rounded   transition cursor-pointer' />
                <Plug className='w-5 h-5 hover:bg-gray-600  rounded   transition cursor-pointer'/>
                <Zap className='w-5 h-5 hover:bg-gray-600  rounded   transition cursor-pointer'/>
                <ListFilter className='w-5 h-5 hover:bg-gray-600  rounded   transition cursor-pointer'/>
                <Star className='w-5 h-5 hover:bg-gray-600  rounded   transition cursor-pointer'/>
                <Globe className='w-5 h-5 hover:bg-gray-600  rounded   transition cursor-pointer'/>
                <div className='flex gap-2 bg-gray-300 w-fit px-2 py-1 rounded text-black -mt-1.5 hover:bg-gray-100'>
                     <UserPlus className='w-5 h-5'/>
                     <p>Share</p>
                </div>
               
                <Ellipsis className='w-5 h-5 hover:bg-gray-600  rounded   transition cursor-pointer'/>
  
            </div>
            
        </div>
      
      <div className=' flex gap-3'>

          <div className='bg-[#101204]  flex flex-col gap-3 ml-12 w-70 h-40 rounded-lg mt-10  pl-4 text-white'>
            <div className='flex mt-2 '>
                <p>To Do</p>
                <p className='ml-40'>2</p>
                <Ellipsis className='w-5 h-5 ml-3'/>
            </div>
            
            <p className='cursor-pointer rounded px-2 py-1 mr-2 transition bg-gray-500 hover:text-white'>Code Wars</p>
            <p className='cursor-pointer rounded px-2 py-1 mr-2 transition bg-gray-500 hover:text-white'>React</p>

            <div className='flex gap-2'>
                 <Plus className='w-5 h-5'/>
                 <p>Add Cards</p>
                 <SquareKanbanPlus className='w-5 h-5 ml-28'/>

            </div>
            
        </div>

          <div className='bg-[#101204]  flex flex-col gap-3 ml-12 w-70 h-40 rounded-lg mt-10  pl-4 text-white'>
            <div className='flex mt-2'>
                <p>Doing</p>
                <p className='ml-40'>1</p>
                <Ellipsis className='w-5 h-5 ml-3'/>
            </div>
            
            <p className='cursor-pointer rounded px-2 py-1 mr-2 transition bg-gray-500 hover:text-white'>Code Wars</p>

            <div className='flex gap-2'>
                 <Plus className='w-5 h-5'/>
                 <p>Add Cards</p>
                 <SquareKanbanPlus className='w-5 h-5 ml-28'/>

            </div>
          
            
        </div>

          <div className='bg-[#101204]  flex flex-col gap-3 ml-12 w-70 h-40 rounded-lg mt-10  pl-4 text-white'>
            <div className='flex mt-2 '>
                <p>Done</p>
                <p className='ml-40'>2</p>
                <Ellipsis className='w-5 h-5 ml-3'/>
            </div>
            
            <p className='cursor-pointer rounded px-2 py-1 mr-2 transition bg-gray-500 hover:text-white'>Code Wars</p>
            <p className='cursor-pointer rounded px-2 py-1 mr-2 transition bg-gray-500 hover:text-white'>React</p>

             <div className='flex gap-2'>
                 <Plus className='w-5 h-5'/>
                 <p>Add Cards</p>
                 <SquareKanbanPlus className='w-5 h-5 ml-28'/>

            </div>
            
        </div>

      </div>


      <div className='flex gap-4 absolute bottom-6 left-100 bg-gray-600 px-4 py-3 rounded-md text-white '>
        <div className='flex gap-2 hover:bg-gray-400 px-2 py-1 rounded  w-fit  '>
            <Inbox className='w-5 h-5'/>
            <p>Inbox</p>

        </div>

         <div className='flex gap-2  hover:bg-gray-400 px-2 py-1 rounded  w-fit '>
            <NotepadText className='w-5 h-5'/>
            <p>Planner</p>

        </div>

         <div className='flex gap-2 bg-[#1C2B42] px-2 py-1 rounded  w-fit '>
            <Inbox className='w-5 h-5'/>
            <p>Boards</p>
            <p>|</p>

        </div>

          <div className='flex gap-2  hover:bg-gray-400 px-2 py-1 rounded  w-fit '>
            <Dices className='w-5 h-5'/>
            <p>Switch Boards</p>

        </div>

      </div>

      

    </div>

    </>
    




       
 )
    
       




}

export default Board;