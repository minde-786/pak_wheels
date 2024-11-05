import Image from "next/image"
import Link from "next/link"
import Card from "../../../component/card"
export const metadata={
    title:"Bikes "}
 

export default function Bike(){
    return(
       <ul>
<div > 
<li><h1 className="flex justify-center font-bold py-5 text-2xl">Honda CG-125 Price In Pakistan,Images,Reviews And Specs</h1></li>
 <li className="flex justify-center">
 <Image
 src="/ee.png"
 alt="website template" width={96} height={60}
 className="w-96 h-60"/></li>
<li className=" py-6  px-7 text-xs text-center">
    <h5> Honda CG-125 2024 is amazing</h5>
</li>

<li className="flex justify-center font-bold py-4">
    PKR 2,10000
</li>
<li className="flex justify-center " >
<Link href="/booking"><button className="bg-blue-600 rounded-lg mx-2 px-2"> Make payment</button></Link><button className="bg-blue-600 rounded-lg mx-2 px-2">Reguest Bank Finance </button>
<button className="bg-blue-600 rounded-lg mx-2 px-2">Visit Place</button>
<button className="bg-blue-600 rounded-lg mx-2 px-2">Car ispection </button>
</li>
<h3 className="flex justify-center py-4"><Card/></h3>
</div>
</ul>  )
}