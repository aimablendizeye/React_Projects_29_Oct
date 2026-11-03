import Header  from "./Header"
import Footer from "./Footer"
import Section from './Section'
import Card from "./Card"
import Student  from "./Students"

function App() {

  return  (
    <>
    <div className="min-h-screen bg-gray-700 text-white">
    <Header/>
    <Section/>
    <Footer/>

    </div>
    
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
