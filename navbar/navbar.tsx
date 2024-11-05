 "use client"
import React from "react";
 import Link from "next/link";
 //import "./globals.css";
const Navbar=()=>{
    return(
    <div>   <nav
  
 
      className="  ">
          
                      <div> <ul><li className=" flex justify-around">
             <div>
                {/* <img
             src="ali.png"
             alt="logo"
             className="w-10 h-8"
             
             />  */}
              
              <div/></div> <div> <Link href="/home"  className=" hover:text-lime-500 "> home </Link></div> 
             <div className="hover:text-lime-500">< Link href="/used">Usedcars </Link> </div>
             <div  className="hover:text-lime-500"><Link href="/contact ">Newcars </Link>        </div>  
             <div  className="hover:text-lime-500"><Link href="/Bike">Bikes </Link>        </div>  
              <div  className="hover:text-lime-500"><Link href="/store">Atuo Store </Link>        </div>  
             
             <div  className="hover:text-lime-500"><Link href="/honda">blogs </Link>        </div>   
             <div  className="hover:text-lime-500"><Link href="/booking">Book Now </Link>        </div>   
              </li>
      </ul>

      
   </div>
     <div> </div>


       </nav></div>
 )}
 export default Navbar;