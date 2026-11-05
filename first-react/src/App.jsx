import Header  from "./Header"
import Footer from "./Footer"
import Section from './Section'


function App() {

  return  (
    <>
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,#1e3a8a_0%,#090d16_55%,#040609_100%)] text-white">
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
