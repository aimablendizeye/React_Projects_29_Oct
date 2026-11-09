import {SquareKanbanPlus,SquareKanban,Activity} from 'lucide-react';

function TrelloSection () {
        

    return (
        <div className='flex  pt-36 flex-col pl-30 gap-3'>
            <div className='flex gap-2'>
                <SquareKanban className='w-4 h-4'/>
                <p>Boards</p>
            </div>
            <div className='flex gap-2'>
                <SquareKanbanPlus className='w-4 h-4'/>
                <p>Templates</p>
            </div>
            <div className='flex gap-2'>
                <Activity className='w-4 h-4'/>
                <p>Home</p>
            </div>
        </div>
    )
}

export default TrelloSection;