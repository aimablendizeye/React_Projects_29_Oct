
import {FolderKanban,Users,Settings} from 'lucide-react'


function Detail({ isVisible }) {
      if (!isVisible) return null;
    return (
        <div className='flex flex-col gap-2 text-[#C5C6C9] text-sm'>
            <div className='flex gap-4 bg-[#1C2B42] px-14 py-1 rounded cursor-pointer'>
                <FolderKanban className='w-5 h-5'/>
                <p>Boards</p>
            </div>

            <div className='flex gap-4 hover:bg-[#2C2C2E] px-14 py-1 rounded cursor-pointer'>
                <Users className='w-5 h-5'/>
                <p>Members</p>
            </div>
            <div className='flex gap-4 hover:bg-[#2C2C2E] px-14 py-1 rounded cursor-pointer'>
                <Settings className='w-5 h-5'/>
                <p>Settings</p>
            </div>
            <div>
                <p className='text-sm bg-[#242528] p-2 rounded '>Upgrade this Workspace <br />
                 Get unlimited boards, <br /> advanced automation,  <br />Planner (full access),<br />
                  collapsible lists, AI, and more! <br /><br />
                   Upgrade</p>
            </div>
        </div>
    )


    
} 

export default Detail;