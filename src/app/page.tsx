import Link from "next/link"

import Image from "next/image"
  const Myvillage=()=>{
   return(
     <div ><div className="bg-slate-200 " >
       <h1 className="flex justify-center py-2   "><b> Sell Your Car on PakWheels and Get Best Price</b></h1>
     <h2 className="flex justify-around">
      <ul className="bg-slate-100 my-5 mx-6 px-2 mb-14 py-2 border border-1 border-zinc-950 rounded-sm">
      <li> <h2 className="font-bold">Post Your Add on PakWheels</h2>   </li>
      <li>Post your ad for free in 3 easy stpes </li><li>getgenuine offerfrom verified buyers  </li><li>sell your car fast at the best price </li>
     <br></br>
     <button className="py-2 px-2  bg-blue-800 rounded-xl ">   Post Your Ad  </button>
     </ul>
     
     <ul className="bg-slate-100 my-5 mx-6 px-3 mb-14 py-2 border border-1 border-zinc-950 rounded-sm" >
      <li >
      <h2 className="font-bold">Try PakWheels Sell It For Me </h2>
      

      
      <li > dedicated sales expert to sell  your car</li><li> we Bargain for you  and share the best Offer</li> We  Ensure Safe and secure Tranction</li>
      <br></br>
      <br></br>
      <button className="py-2 px-2 mx-1 bg-blue-800 rounded-xl  ">   Register Your Car </button>
     </ul>
     </h2>
     </div>







     <h1 className="flex justify-center font-bold bg-slate-100 h-100">Featured New Cars </h1>
     <h2 className="flex space-x-7 font-semibold px-4"><p><Link href="/"> popular</Link></p> <p><Link href="/">Upcoming</Link></p><p><Link href="/">Newly Luanched</Link></p></h2>
     
     <h1 className="flex justify-around">  <Link href="/home"><Image
     src="/a.png"
     alt="website templates" width={150} height={60}
     /></Link>
     <Link href="/used">
     <Image 
     src="/aa.png"
     alt="website templates"width={150} height={60}
     /></Link>
     <Link href="/contact">
     <Image
     src="/aaa.png"
     alt="website templates"width={150}height={60}
     /></Link>
     <Link href="/store">
     <Image 
     src="/aaaa.png"
     alt="website templates" width={150} height={60}
     /></Link></h1>
     <ul className="flex justify-around text-blue-800 ">

      <li className=" hover:text-red-600"><Link href="/home">
      <h1 className="font-bold">Suzuki Alto</h1></Link>
      <h2 className="text-green-700">PKR 23.3 - 30.5 lacs
        <p className="text-slate-500">⭐⭐⭐199 Reviews</p>
    </h2></li>




     <li><h1 className="font-bold  hover:text-red-600"><Link href="/used">Toyota Corolla</Link>
     </h1><h2 className="text-green-700">PKR 59.7 - 75.5 lacs
    <p className="text-slate-500" >⭐⭐⭐⭐ 622 Reviews</p></h2></li>
    
      <li><h1 className="font-bold  hover:text-red-600">
        <Link href="/contact">Honda Civic</Link> 
        </h1><h1 className="text-green-700"> PKR 86.6 - 99.0 lacs
          <p className="text-slate-500">⭐⭐⭐359 Reviews</p></h1></li>
    <li><h1 className="font-bold  hover:text-red-600"><Link href="/store">Honda city</Link>
    </h1> <h1 className="text-green-700">PKR 46.5 - 58.5 lacs
      <p className="text-slate-500"> ⭐⭐⭐359 Reviews</p></h1></li></ul>
   
     </div>
    
   )
 }
export default Myvillage
//  import Link from "next/link";
//  import { title } from "process";
//  // import Card from "../../component/card";
//  export default function Village(){
//    return(<div className="flex justify-center  text-3xl"> well come to come page</div>)










  //(
    
  //     {/* <b><Card/></b> */}
 
  //     <ul>
  //     <li><Link href="/home">about </Link>  </li>
  //     <li><Link href="/photos">Photos </Link>  </li>
  //     <Link href="/History">History </Link>  </ul>
    
  // )
//}
