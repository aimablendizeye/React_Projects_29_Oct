

function Header () {

 return (
    <header className="pl-10">
       <h1 className="text-3xl font-black pb-5" >My  Website</h1> 
       <nav> 
        <ul className="text-blue-400">
            <li> <a href="#">Home</a></li>
            <li> <a href="#">Contact</a></li>
            <li> <a href="#">Service</a></li>
            <li> <a href="#">Project</a></li>
        </ul>
       </nav>

      <hr className="font-bold mt-4"></hr>
    </header>
 )

}


export default Header;