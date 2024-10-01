import Introduction from "@/components/Introduction";
import Image from "next/image";
import ProfilePic from "../public/profilePic.jpg";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    
  <div>
    <div> <Navbar /> </div>
    <div className="flex flex-col  lg:flex-row justify-between bg-black-900 h-full md:h-screen">
      <div>
        <Introduction /> 
      </div>
      <div> 
        <Image 
            src={ProfilePic}
            alt="myPic"
            width={600}
            height={600}
            className="w-[300px] h-[300px] mr-[250px] mt-[150px] ml-[100px] md:ml-[300px] rounded-full mb- bg-black-300"
         />
      </div>

    </div>
  </div>


  );
}
