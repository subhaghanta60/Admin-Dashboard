"use client"

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod';
import InputFields from '../InputFields';
import Image from 'next/image';

const schema = z.object({
    username: z
    .string()
    .min(3, { message: 'Username Must Be At Least 3 Characters Long!' })
    .max(20, { message: 'Username Must Be At Most 20 Characters Long!' }),
    email: z
    .string()
    .email({message: "Invalid Email Address!"}),
    password: z
    .string()
    .min(6, {message: "Password Must be al least 8 character long !"}),

    firstname: z.string().min(1, { message: 'First Name Will Be required' }),
    lastname: z.string().min(1, { message: 'Last Name Will Be required' }),
    phone: z.string().min(1, { message: 'Phone Number Will Be required' }),
    address: z.string().min(1, { message: 'Address Will Be required' }),
    bloodType: z.string().min(1, { message: 'Blood Type Will Be required' }),
    birthday: z.date({ message: 'Birthday Will Be required' }),
    sex:z.enum(["male","female"],{message:"Sex is required!"}),
    img:z.instanceof(File,{message:"Image is required"}),
  });

  type Inputs =z.infer<typeof schema>;
const StudentForm = ({type,data}:{type:"create" | "update"; data?:any}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>({
        resolver: zodResolver(schema),
      });

      const onSubmit = handleSubmit(data=> {
        console.log(data)

      })
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className='text-xl semi-bold'>Create a New Student</h1>
      <span className='text-xs text-gray-400 font-medium'>Authentic Information</span>
      <div className='flex justify-between flex-wrap gap-4'>
      <InputFields label='Username' name="username" defaultValue={data?.username} register={register} error={errors?.username} />
      <InputFields label='Email' name="email" type="email" defaultValue={data?.email} register={register} error={errors?.email} />
      <InputFields label='Password' name="password" type="password" defaultValue={data?.password} register={register} error={errors?.password} />
      </div>
      <span className='text-xs text-gray-400 font-medium'>Personal Information</span>
      <div className='flex justify-between flex-wrap gap-4'>
    
      <InputFields label='First Name' name="firstname" defaultValue={data?.firstname} register={register} error={errors?.firstname} />
      <InputFields label='Last Name' name="lastname"  defaultValue={data?.lastname} register={register} error={errors?.lastname} />
      <InputFields label='Phone' name="phone" type="phone" defaultValue={data?.phone} register={register} error={errors?.phone} />
      <InputFields label='Address' name="address" defaultValue={data?.address} register={register} error={errors?.address} />
      <InputFields label='Blood Type' name="bloodType" defaultValue={data?.bloodType} register={register} error={errors?.bloodType} />
      <InputFields label='BirthDay' name="birthday" type="date" defaultValue={data?.birthday} register={register} error={errors?.birthday} />
      </div>
      <div className='flex justify-between flex-wrap gap-4'>
          <div className='flex flex-col gap-2 w-full md:w-1/4'>
            <label className='text-xs text-gray-500'>Sex</label>
            <select className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full' {...register("sex")} defaultValue={data?.sex}> 
                  <option value="male" >Male</option>
                  <option value="female" >Female</option>
            </select>
            {errors.sex?.message && <p className='text-xs text-red-400'>{errors.sex?.message.toString()}</p>}
          </div>
          <div className='flex flex-col gap-2 w-full md:w-1/4 justify-center'>
              <label className='text-xs text-gray-500 flex items-center gap-2 cursor-pointer' htmlFor='img'>
              <Image src="/upload.png"alt="" width={28} height={28} />
                <span>Upload a Photo</span>
              </label>
            <input 
              id="img"
              type='file'
              {...register("img")}
              className='hidden'
            />
              {errors.sex?.message && <p className='text-xs text-red-400'>{errors.sex?.message.toString()}</p>}
          </div>
        </div>
   
      <button className='bg-blue-400 text-white p-2 rounded-md'>{type==="create" ? "Create" : "Update"}</button>
    </form>
  )
}

export default StudentForm