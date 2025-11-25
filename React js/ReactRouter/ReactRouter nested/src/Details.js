import { Outlet,Link } from "react-router";

export default function Details (){

    return(
        <>
         <nav>

            <Link to="/Details">Details</Link>
            <Link to="/Hello">hello</Link>
            <Link to="/Hi">HI</Link>
         </nav> 
     <h2>JAY SHREE RAM</h2>
     <Outlet></Outlet>
        </>
    )
}