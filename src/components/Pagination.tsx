"use client"

import { ITEMS_PER_PAGE } from "@/lib/settings";
import { useRouter } from 'next/navigation';



const Pagination = ({page, count} : {page:number; count:number}) => {

  const router = useRouter()

  const hasPrev = ITEMS_PER_PAGE*(page-1) >0

  const hasNext = ITEMS_PER_PAGE*(page-1) + ITEMS_PER_PAGE < count

  console.log(hasNext)
  
  const changePage= (newPage:number)=> {
    const params = new URLSearchParams(window.location.search)
    params.set("page",newPage.toString())
    router.push(`${window.location.pathname}?${params}`)

  }
  return (
    <div className='p-4 flex items-center justify-between text-gray-500'>
        <button disabled={!hasPrev} className="py-2 px-4 rounded-md bg-lamaSky  text-xs font-semibold disable:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-200" onClick={()=>{changePage(page-1)}}>Prev</button>
        <div className="flex items-center text-sm gap-2">
          {Array.from({length:Math.ceil(count / ITEMS_PER_PAGE)}, (_,index)=> {
            const pageIndex=index+1;
            return <button key={pageIndex} className={`px-2 rounded-sm ${page === pageIndex? "bg-lamaSky" : "" } `}
            onClick={()=>{changePage(pageIndex)}}
            >{pageIndex}</button>
            
          })}
            
           
        </div>
        <button disabled={!hasNext} className="py-2 px-4 rounded-md  text-xs font-semibold bg-lamaSky disable:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-200" onClick={()=>{changePage(page+1)}}>Next</button>
    </div>
  )
}

export default Pagination