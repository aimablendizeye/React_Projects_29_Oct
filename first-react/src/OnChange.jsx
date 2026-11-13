
import {useState} from 'react'


function OnChange () {

 const [name,setName] = useState("")

const rendering = (event) => {
    setName (event.target.value);
}
  

    return (
        <div className='m-20'>
            <input type="text" value={name} onChange={rendering} className='bg-red-400 rounded '  />
            <p>Name : {name}</p>
        </div>
    )
}


export default OnChange;