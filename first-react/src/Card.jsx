import profilePic from './assets/Aimable.png'

function Card () {

   return (
       <div className='ml-20 mt-20 w-fit bg-blue-200 p-4 flex flex-col items-center text-center rounded-lg'>

        <img src={profilePic} alt="profile picture" className='w-36  object-cover shadow-md rounded-full bg-black' />

        <h2 className='font-bold text-2xl mt-2'>Aimable Ndizeye</h2>
        <p className='mt-2 font-semibold '>A Software Engineer</p>
       </div>
   )
  
}

export default Card;