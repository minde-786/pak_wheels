<<<<<<< HEAD
import React from "react"
import Image from "next/image"
import Card from "../../../component/card"
 export const metadata={
   title:"contac info"
 }

//  import Navbar from "../../../navbar/navbar"
//   import Card from "../../../component/card"
 import Link from "next/link"
 export default function Contact(){
     return(<ul>
 {/* <div> <li className="hover:text-lime-500"><Card/> </li> </div> */}

 <div>
 <li><h1 className="flex justify-center font-bold py-5 text-2xl">Honda Civic  2024 Price In Pakistan,Images,Reviews And Specs</h1></li>
 <li className="flex justify-center">
 <Image
 src="/cc.png"
 alt="website template" width={96}height={60}
 className="w-96 h-60"/></li>
<li className=" py-6  px-7 text-xs text-center">
    Honda Civic 2024 offers a Reliability,fuel efficiency,and comfortable driving experience.
    it's kwown for its spacious interior, advanced saftety,
    and smooth handing making. <br></br>it a popular choice for daily commuting and family outings.
</li>

<li className="flex justify-center font-bold py-4">
    PKR 98,000,000
</li>
<li className="flex justify-center " >
<Link href="/booking"><button className="bg-blue-600 rounded-lg mx-2 px-2"> Make payment</button></Link>
<button className="bg-blue-600 rounded-lg mx-2 px-2">Reguest Bank Finance </button>
<button className="bg-blue-600 rounded-lg mx-2 px-2">Visit Place</button>
<button className="bg-blue-600 rounded-lg mx-2 px-2">Car ispection </button>
</li>
<h3 className="flex justify-center py-4"><Card/></h3>
      </div>
 </ul>  )
=======
import React from "react"
import Image from "next/image"
import Card from "../../../component/card"
 export const metadata={
   title:"contac info"
 }

//  import Navbar from "../../../navbar/navbar"
//   import Card from "../../../component/card"
 import Link from "next/link"
 export default function Contact(){
     return(<ul>
 {/* <div> <li className="hover:text-lime-500"><Card/> </li> </div> */}

 <div>
 <li><h1 className="flex justify-center font-bold py-5 text-2xl">Honda Civic  2024 Price In Pakistan,Images,Reviews And Specs</h1></li>
 <li className="flex justify-center">
 <Image
 src="/cc.png"
 alt="website template" width={96}height={60}
 className="w-96 h-60"/></li>
<li className=" py-6  px-7 text-xs text-center">
    Honda Civic 2024 offers a Reliability,fuel efficiency,and comfortable driving experience.
    it's kwown for its spacious interior, advanced saftety,
    and smooth handing making. <br></br>it a popular choice for daily commuting and family outings.
</li>

<li className="flex justify-center font-bold py-4">
    PKR 98,000,000
</li>
<li className="flex justify-center " >
<Link href="/booking"><button className="bg-blue-600 rounded-lg mx-2 px-2"> Make payment</button></Link>
<button className="bg-blue-600 rounded-lg mx-2 px-2">Reguest Bank Finance </button>
<button className="bg-blue-600 rounded-lg mx-2 px-2">Visit Place</button>
<button className="bg-blue-600 rounded-lg mx-2 px-2">Car ispection </button>
</li>
<h3 className="flex justify-center py-4"><Card/></h3>
      </div>
 </ul>  )
>>>>>>> e42b37b (some updates in thanks)
 }