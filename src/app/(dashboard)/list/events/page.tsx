import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { headers } from "next/headers"
import Image from "next/image"
import Link from "next/link"
import { assignmentsData, classesData, eventsData, examsData, parentsData, resultsData, role, subjectsData,   } from "@/lib/data"

type Event = {
  id:number;
  title:string; 
  class:string;
  date:string;
  startTime:string;
  endTime:number
}

const columns = [
  {
    header:"Title",
     accessor:"title"
  },
  {
    header:"Class", 
    accessor:"class",
    className:"hidden md:table-cell"
  },
  {
    header:"Date", 
    accessor:"date",
    className:"hidden md:table-cell"
  },
  {
    header:"Start", 
    accessor:"startTime",
    className:"hidden md:table-cell"
  },
  {
    header:"End", 
    accessor:"endTime",
    className:"hidden md:table-cell"
  },
  
  
  {
    header:"Actions", 
    accessor:"actions",
    
  },
]

const EventListPage
 = () => {

  const renderRow = (item:Event) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4">
        
      {item.title}
      </td>
      <td className="hidden md:table-cell">
      {item.class}
      </td>
      <td className="hidden md:table-cell">
      {item.date}
      </td>
      <td className="hidden md:table-cell">
      {item.startTime}
      </td>
      <td className="hidden md:table-cell">
      {item.endTime}
      </td>
    
      
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/parents/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" height={16} width={16}/>
            </button>
          </Link>
          {role ==="admin" && ( <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
              <Image src="/delete.png" alt="" height={16} width={16}/>
            </button>
          )}

        </div>
      </td>
    </tr>

  );
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* Top*/}
      <div className="flex items-center justify-between">
        <h1 className=" hidden md:block text-xl font-semibold">All Events</h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center  justify-center rounded-full bg-lamaYellow">
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button>
          </div>

        </div>

      </div>
      {/* List */}
      
        <Table columns ={columns} renderRow={renderRow} data={eventsData}/>
       
      {/* Pagination */}
      <Pagination />
    </div>
  )
}

export default EventListPage
