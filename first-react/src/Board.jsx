import {useState} from 'react';
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
     SquareKanbanPlus,
      X,
    Lightbulb} from 'lucide-react'
import Dissert from './assets/Dissert.png'
import TrelloHeader from "./TrelloHeader"
import TodoList from "./TodoList";

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
      
      <div className=' flex gap-3 text-sm ml-4'>
          <TodoList title="To Do" />
          <TodoList title="Doing" />
          <TodoList title="Done" />

     

        <div className='bg-[#52606e]  mt-4 w-65  py-1 h-8 rounded flex gap-2'>
          <Plus className='w-5 h-5 '/>
          <textarea placeholder='Add another list'className='w-full' />
        </div>

      </div>


      <div className='flex gap-4 absolute bottom-6 left-100 bg-gray-600 px-4 py-4 rounded-md text-white '>
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