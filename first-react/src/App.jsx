import Header  from "./Header"
import Footer from "./Footer"
import Section from './Section'
import TodolistApp from "./TodolistApp"

import TrelloHeader from "./TrelloHeader"
import TrelloSection from "./TrelloSection"
import TrelloFooter from "./TrelloFooter"



function App() {

  return  (


    <>
    <div className="bg-[#1F1F21] text-white min-h-screen">
     <TrelloHeader/>
     <TrelloSection/>
     <TrelloFooter/>
   

    </div>
    
     {/* <TodolistApp/> */}
    {/* <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,#1e3a8a_0%,#090d16_55%,#040609_100%)] text-white">
    <Header/>
    <Section/>
    <Footer/>

    </div> */}
    



     {/* <Card/>
     <Card/>
      */}

      {/* <Student name = "Aimable" address="Kanombe" isStudent={true} />
      <Student name = "Rafiki" address ="Kigali" isStudent={false} />
      <Student name = "Byiringiro" address = "Nyabihu" isStudent={false}/> */}
      
    
    </>
   
  )
}

export default App
