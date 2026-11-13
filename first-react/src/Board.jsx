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
     SquareKanbanPlus} from 'lucide-react'
import Dissert from './assets/Dissert.png'
import TrelloHeader from "./TrelloHeader"

function Board () {

  const [cards,setCards] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [text,setText] = useState("");

  function handleAdd () {
    if(text.trim() ==="") return;

    setCards ([...cards,text]);
    setText("");
    setIsAdding (false);
  }

  function handleCancel () {
    setText("");
    setIsAdding(false);
  }


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
      
      <div className=' flex gap-1'>

        <div className='w-72 bg-[#101204] p-3 rounded-lg ml-12 mt-10 '>
          <h3 className='font-semibold mb-3'>To Do</h3>

          {cards.map ((card,index) => (
            <div  key={index} className='bg-gray-500 p-2 rounded shodow-sm '>
              {card}
              
            </div>
      

          ) )}
         {isAdding ? (
          <div>
            <textarea autoFocus placeholder='Enter a title for this card...'
            value ={text}
            onChange={(e) => setText(e.target.value)}
            className='w-full p-2 rounded shadow-sm resize-none outline-none'
            row={3}
            
            
            
          />
          <div className='flex items-center gap-2 mt-3'>
            <button
              onClick={handleAdd}
              className='bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded'> Add card

              </button>

              <button
              onClick= {handleCancel}
              className='text-gray-600 hover:text-black text-xl px-2'
              >
                X
              </button>
            
          </div>
          </div>
         ): (
          <button
          onClick={() =>setIsAdding(true)}
          className='w-full text-left text-gray-600 hover:bg-gray-300 p-2 rounded'>+ Add a card</button>
         )}



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

        <div className='bg-[#3D7DA2]  mt-10 w-40 h-10 py-1 rounded flex gap-2'>
          <Plus className='w-5 h-5 '/>
          <p className='text-white'>Add another list</p>
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