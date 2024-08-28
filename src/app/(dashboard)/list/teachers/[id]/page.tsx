"use client"
import Announcements from "@/components/Announcements"
import BigCalender from "@/components/BigCalender"
import Performance from "@/components/Performance"
import Image from "next/image"
import Link from "next/link"

const SingalTeacherPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col xl:flex-row gap-4'>
        {/* Left*/}
        <div className="w-full xl:w-2/3">
        {/* Top Section */}
            <div className=" flex flex-col lg:flex-row  gap-4">

        
                 {/* Info Card */}
                 <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
                    <div  className="w-1/3 rounded-md">  
                        <Image src="https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" height={144} width="144" className="w-36 h-36 rounded-full object-cover" />
                     </div>

                     <div className="w-2/3 flex flex-col justify-between gap-4">
                        <h1 className="text-xl font-semibold">Subha Ghanta</h1>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat labore suscipit architect.</p>
                        <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image src="/blood.png" alt="" width={14} height={14}/>
                                <span>A+</span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image src="/date.png" alt="" width={14} height={14}/>
                                <span>January 2025</span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image src="/mail.png" alt="" width={14} height={14}/>
                                <span>Subha@gmail.com</span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image src="/phone.png" alt="" width={14} height={14}/>
                                <span>+91 9775967</span>
                            </div>

                        </div>
                     </div>

                 </div>


                 {/* small Card*/}
                 <div className="flex-1 flex gap-4 justify-between flex-wrap ">
                    {/*Card */}
                    <div className="bg-white w-full p-4 rounded-md   flex gap-4 md:w-[47%] xl:w-[45%] 2xl:w-[47%]">
                        <Image src="/singleAttendance.png" alt="" height={24} width={24}  className="w-6 h-6"/>
                        <div className="">
                            <h1 className="text-xl font-semibold">90%</h1>
                            <span className="text-sm text-gray-400">Attendence</span>

                        </div>

                    </div>
                    {/*Card */}
                    <div className="bg-white w-full p-4 rounded-md  flex gap-4 md:w-[47%] xl:w-[45%] 2xl:w-[47%]">
                        <Image src="/singleBranch.png" alt="" height={24} width={24} className="w-6 h-6"/>
                        <div className="">
                            <h1 className="text-xl font-semibold">2</h1>
                            <span className="text-sm text-gray-400">Branches</span>

                        </div>

                    </div>

                    {/*Card */}
                        <div className="bg-white w-full p-4 rounded-md flex gap-4 md:w-[47%] xl:w-[45%] 2xl:w-[47%]">
                        <Image src="/singLeLesson.png" alt="" height={24} width={24} className="w-6 h-6" />
                        <div className="">
                            <h1 className="text-xl font-semibold">6</h1>
                            <span className="text-sm text-gray-400">Lesson</span>

                        </div>

                    </div>

                    {/*Card */}
                    <div className="bg-white w-full p-4 rounded-md flex gap-4 md:w-[47%] xl:w-[45%] 2xl:w-[47%]">
                        <Image src="/singleClass.png" alt="" height={24} width={24} className="w-6 h-6"/>
                        <div className="">
                            <h1 className="text-xl font-semibold">10</h1>
                            <span className="text-sm text-gray-400">classes</span>

                        </div>

                    </div>



                 </div>
          </div>
          {/* Buttom */}
          <div className="mt-4 bg-white rounded-md p-4 h-[800]">
            <h1>Teacher&apos;s Schedule</h1>
            <BigCalender />
            
          </div>
        </div>


         {/* Right*/}
         <div className="w-full xl:w-1/3 flex flex-col gap-4">
         <div className="bg-white p-4 rounded-md ">
            <h1 className="text-xl font-semibold">Shortscuts</h1>
            <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
                <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">Teacher&apos;s Classes </Link>
                <Link  className="p-3 rounded-md bg-lamaPurpleLight" href="/">Teacher&apos;s Students </Link>
                <Link  className="p-3 rounded-md bg-lamaYellowLight" href="/">Teacher&apos;s Lessions </Link>
                <Link  className="p-3 rounded-md bg-pink-50" href="/">Teacher&apos;s Exams </Link>
                <Link  className="p-3 rounded-md bg-lamaSkyLight" href="/">Teacher&apos;s Assignment </Link>

            </div>
         </div>
         <div>

         </div>
         <Performance />
         <Announcements />

         </div>
         

    </div>
  )
}

export default SingalTeacherPage