
import { useState } from "react";
import OnClick from "./OnClick";


function OnChange () {
   

    return (
        <div >
           
            <p>Hey there is some I hide , just hover me</p> <br />
            <button className= " peer bg-amber-500 px-2 py-1 font-bold  rounded cursor-pointer">Hover me </button> <br />
             
                  <h3 className=" hidden peer-hover:block bg-white text-black p-2 rounded">This is what i was hidden</h3>
        
           
           
        </div>
    )

}


export default OnChange;