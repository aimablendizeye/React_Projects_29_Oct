
import {FolderKanban,Users,Settings} from 'lucide-react'


function Detail({ isVisible }) {
      if (!isVisible) return null;
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
                <FolderKanban className='w-5 h-5'/>
                <p>Boards</p>
            </div>

            <div className='flex gap-2'>
                <Users className='w-5 h-5'/>
                <p>Members</p>
            </div>
            <div className='flex gap-2'>
                <Settings className='w-5 h-5'/>
                <p>Settings</p>
            </div>
            <div>
                <p className='text-sm '>Upgrade this Workspace
                 Get unlimited boards, advanced automation, Planner (full access),
                  collapsible lists, AI, and more!
                   Upgrade</p>
            </div>
        </div>
    )


    
} 

export default Detail;