import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* Left Side*/}
        <div className="w-full lg:w-2/3">
          {/* User Card */} 
          <div className="flex gap-4 justify-between flex-wrap">
            <UserCard type="Student"/>
            <UserCard type="Teacher"/>
            <UserCard type="Parent"/>
            <UserCard type="Stuff"/>
          </div>
        </div>
      

      {/* Right Side */}
        <div className="w-full lg:w-1/3">r</div>
        </div>
  )
}

export default AdminPage