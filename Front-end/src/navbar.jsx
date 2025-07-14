import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cardsdata">Jets</Link></li>
               <li><Link to ="/ops">Operations</Link></li>
               <li><Link to = "/connections">Defense Contractors</Link></li>
                
            </ul>
        </nav>
    );
}
export default Navbar