import Header  from "./Header"
import Footer from "./Footer"
import Food from './Food'
import Card from "./Card"
import Student  from "./Students"

function App() {

  return  (
    <>
     {/* <Header/>
     <Food/>
     <Footer/> */}
     {/* <Card/>
     <Card/>
      */}

      <Student name = "Aimable" address="Kanombe" isStudent={true} />
      <Student name = "Rafiki" address ="Kigali" isStudent={false} />
      <Student name = "Byiringiro" address = "Nyabihu" isStudent={false}/>
      
    
    </>
   
  )
}

export default App
