<<<<<<< HEAD



import Link from "next/link"

export const metadata={
    title:"book now "}

 export default function Booking(){
    return(
    <div>
<h1 className="  bg-slate-300 h-screen"><p className="flex justify-center font-bold text-3xl py-5">Enter Your Details</p>
<span className=" "> <hr/></span>
<div className=" flex flex-col items-center py-5">
   <input
   className=" my-2 border border-1 border-neutral-950 rounded-md px-36  py-2 mb-8 " 

   type="text"
   placeholder="Enter Your Email"
   
   
   />
   <input
   className=" border border-1 border-neutral-950 rounded-md px-36 py-2 mb-8"
   type="text"
   placeholder="Enter Your Password"
   
   />
   <input
   className=" border border-1 border-neutral-950 rounded-md px-36 py-2 mb-8"
   type="text"
   placeholder="Enter Your phone Number"
   
   
   />
   <input
   className=" border border-1 border-neutral-950 rounded-md px-36 py-2 mb-8"
   type="text"
   placeholder="Enter Your Address"
   
   
   />
   <Link href="/thank"> 
   <button className="bg-sky-700 rounded-md px-5 py-3"> Place Your Order </button></Link> 
   
 </div></h1>
    </div>
    
    
=======



import Link from "next/link"

export const metadata={
    title:"book now "}

 export default function Booking(){
    return(
    <div>
<h1 className="  bg-slate-300 h-screen"><p className="flex justify-center font-bold text-3xl py-5">Enter Your Details</p>
<span className=" "> <hr/></span>
<div className=" flex flex-col items-center py-5">
   <input
   className=" my-2 border border-1 border-neutral-950 rounded-md px-36  py-2 mb-8 " 

   type="text"
   placeholder="Enter Your Email"
   
   
   />
   <input
   className=" border border-1 border-neutral-950 rounded-md px-36 py-2 mb-8"
   type="text"
   placeholder="Enter Your Password"
   
   />
   <input
   className=" border border-1 border-neutral-950 rounded-md px-36 py-2 mb-8"
   type="text"
   placeholder="Enter Your phone Number"
   
   
   />
   <input
   className=" border border-1 border-neutral-950 rounded-md px-36 py-2 mb-8"
   type="text"
   placeholder="Enter Your Address"
   
   
   />
   <Link href="/thanks"> 
   <button className="bg-sky-700 rounded-md px-5 py-3"> Place Your Order </button></Link> 
   
 </div></h1>
    </div>
    
    
>>>>>>> e42b37b (some updates in thanks)
    )}     