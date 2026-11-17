
import { useState, useEffect } from "react";
import OnClick from "./OnClick";


function OnChange () {
    const [adding, setAdding] = useState(false);

    function inputing () {
        setAdding(true);
    }
 

    return (
<>
    <div className="text-white bg-black m-20 w-fit px-10 py-2 rounded-sm flex flex-col gap-3">
        <p className="">Weekly Calendar</p>
        <button className="bg-gray-500 rounded-sm cursor-pointer" onClick={setAdding}>Add card</button>
    </div>
</>
       

       
    


    )

}


export default OnChange;