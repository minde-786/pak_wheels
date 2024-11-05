import Image from "next/image"
import Link from "next/link"
import Card from "../../../component/card"
export const metadata={
    title:"store "}
 

export default function Store(){
    return(

<ul>
    <div>    
    <li><h1 className="flex justify-center font-bold py-5 text-2xl">Honda city 2024 Price In Pakistan,Images,Reviews And Specs</h1></li>
 <li className="flex justify-center">
 <Image 
 src="/g.png"
 alt="website template" width={96} height={70}
 className="w-96 h-70"/></li>
<li className=" py-6  px-7 text-xs text-center">
    Honda city 2024 offers a Reliability,fuel efficiency,and comfortable driving experience.
    it's kwown for its spacious interior, advanced saftety,
    and smooth handing making. <br></br>it a popular choice for daily commuting and family outings.
</li>

<li className="flex justify-center font-bold py-4">
    PKR 58,00,000
</li>
<li className="flex justify-center " >
<Link href="/booking"><button className="bg-blue-600 rounded-lg mx-2 px-2"> Make payment</button></Link>
<button className="bg-blue-600 rounded-lg mx-2 px-2">Reguest Bank Finance </button>
<button className="bg-blue-600 rounded-lg mx-2 px-2">Visit Place</button>
<button className="bg-blue-600 rounded-lg mx-2 px-2">Car ispection </button>
</li>

        
        
<h3 className="flex justify-center py-4"><Card/></h3>
        
        </div>
        </ul>)
}




















        //        <ul>
// <div > 
// <li><h1 className="flex justify-center font-bold text-xl">Auto Store</h1></li>

//    <h5 className=" flex justify-center text-xs py-2">Honda Civic</h5> 
//    <li className="flex justify-center"><img 
//  src="dd.png"
//  alt="website template"
//  className="  w-70 h-36"/>
// </li>
// <li> 
//     <h3 className="flex justify-center text-xs py-2"> Toyota corolla</h3>
//     <li className="flex justify-center">  <img 
//  src="ff.png"
//  alt="website template"
//  className="  w-72 h-32"/></li>
 
// </li>
// <li> 
//     <h3 className="flex justify-center text-xs py-2"> Honda city</h3></li>
//     <li className="flex justify-center">  <img 
//  src="g.png"
//  alt="website template"
//  className="  w-72 h-32"/></li>
// </div>
// </ul>  )
// }