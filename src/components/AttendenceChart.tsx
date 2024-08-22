'use client'

import Image from 'next/image';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    Present: 60,
    Absent: 40,
    
  },
  {
    name: 'Tue',
    Present: 70,
    Absent: 30,
    
  },
  {
    name: 'Wed',
    Present: 80,
    Absent: 20,
    
  },
  {
    name: 'Thr',
    Present: 25,
    Absent: 75,
   
  },
  {
    name: 'Fri',
    Present: 65,
    Absent: 35,
   
  },
  
];

const AttendenceChart = () => {
  return (
    <div  className='bg-white rounded-xl w-full h-full p-4'>
        {/* Title */}
        <div className='flex justify-between flex-wrap'>
            <h1 className='text-xl font-semibold '>Attendence</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3"  vertical={false} stroke="#ddd" />
          <XAxis dataKey="name"  axisLine={false}  tick={{fill:"#d1d5db"}} tickLine={false}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
          <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgray"}}/>
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}}/>
          <Bar 
            dataKey="Present" 
           fill="#FAE27C" 
           
           legendType='circle' 
           radius={[10,10,0,0]}
           />
          <Bar 
            dataKey="Absent" 
            fill="#C3EBFA"
            
            legendType='circle'
            radius={[10,10,0,0]}
             />
        </BarChart>
      </ResponsiveContainer>
        
    </div>
  )
}

export default AttendenceChart