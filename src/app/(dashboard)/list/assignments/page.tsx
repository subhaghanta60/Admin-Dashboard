import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { headers } from "next/headers"
import Image from "next/image"
import Link from "next/link"
import { assignmentsData, classesData, examsData, parentsData, role, subjectsData,   } from "@/lib/data"
import FormModal from "@/components/FormModal"

type Assignment = {
  id:number;
  subject:string; 
  class:string;
  teacher:string;
  dueDate:string;
}

const columns = [
  {
    header:"Subject",
     accessor:"subject"
  },
  {
    header:"Class", 
    accessor:"class",
    className:"hidden md:table-cell"
  },
  {
    header:"Teacher", 
    accessor:"teacher",
    className:"hidden md:table-cell"
  },
  {
    header:"Due Date", 
    accessor:"dueDate",
    className:"hidden md:table-cell"
  },
  {
    header:"Actions", 
    accessor:"actions",
    
  },
]

const AssignmentListPage
 = () => {

  const renderRow = (item:Assignment) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4">
        
      {item.subject}
      </td>
      <td className="hidden md:table-cell">
      {item.class}
      </td>
      <td className="hidden md:table-cell">
      {item.teacher}
      </td>
      <td className="hidden md:table-cell">
      {item.dueDate}
      </td>
      <td>
        <div className="flex items-center gap-2">
          
          {role ==="admin" && ( 
            <>
            <FormModal table="assignment" type="update" data={item} />
           <FormModal table="assignment" type="delete" id={item.id} />
           </>
          )}

        </div>
      </td>
    </tr>

  );
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* Top*/}
      <div className="flex items-center justify-between">
        <h1 className=" hidden md:block text-xl font-semibold">All Assignment</h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <FormModal table="assignment" type="delete"  />
          </div>

        </div>

      </div>
      {/* List */}
      
        <Table columns ={columns} renderRow={renderRow} data={assignmentsData}/>
       
      {/* Pagination */}
      <Pagination />
    </div>
  )
}

export default AssignmentListPage
