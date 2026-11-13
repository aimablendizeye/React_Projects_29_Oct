

import { useState } from "react";

function OnClick () {

    const [name,setName] = useState();
    const [isStudent, setIsStudent] = useState(false);

    function update () {
   setName ("Aimable")
    }

    const toggled = () => {
     setIsStudent(!isStudent);
    }

    return (
        <div className="m-20">
            <h3 className="mb-4">My first learning Hooks </h3>

            <h2>Name: {name}</h2>
            <button onClick={update} className="bg-blue-600 w-fit px-2 py-1 rounded" >Click me</button>


          <h2>Is a student: {isStudent? "Yes" : "No"}</h2>
            <button onClick={toggled} className="bg-blue-600 w-fit px-2 py-1 rounded" > Toggle Status</button>



        </div>
    )
}

// export default OnClick;