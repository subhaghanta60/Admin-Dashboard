"use client"

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod';

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
    birthday: z.date( { message: 'Birthday Will Be required' }),
    sex:z.enum(["male","female"],{message:"Sex is required!"}),
    img:z.instanceof(File,{message:"Image is required"}),
  });

const TeacherForm = ({type,data}:{type:"create" | "update"; data?:any}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(schema),
      });
  return (
    <form className="">
        

    </form>
  )
}

export default TeacherForm