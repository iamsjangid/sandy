"use client";
import { useRegisterUserMutation } from '@/redux/queries/Auth.query';
import { registerUserObj } from '@/types/Auth.query';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import * as yup from 'yup'

const RegisterEmail = () => {
    const router = useRouter()
    
    const [registerUser,registerUserResponse] = useRegisterUserMutation();

    const onSubmitHandler = async (e: registerUserObj,{resetForm}:any)=>{
            try {

                const { data,error }:any = await registerUser(e);

                if(error){
                    throw new Error(error.data.message);
                    return
                }

                toast.success(data.msg);
                localStorage.setItem("token",data.access_token);
                
                resetForm()
                router.push("/")

            } catch (error:any) {
                toast.error(error.message);
            }
    }

    const validationSchema = yup.object().shape({
        name:yup.string().required("name is required"),
        email: yup.string().email("email must be valid").required("email is required"),
        password: yup.string().required("password is required")
    })

    const initialValues= {
        name:'',
        email:'',
        password:''
    }

    return (
        <div className='w-full h-full flex justify-between '>
            <div className="w-1/4 h-screen bg-yellow-500" id='sidepannel'>
                <video src='https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949' muted loop autoPlay className='h-full w-w-full block object-cover'>
                </video>
            </div>
            <Formik initialValues={initialValues} onSubmit={onSubmitHandler } validationSchema={validationSchema}>
                <Form className="min-h-screen w-full px-24 py-24 ">
                    <h1 className=' text-2xl'>Sign in to Mynstar</h1>
                    <div className="my-3 w-[40%] ">
                        <button className='w-full flex justify-center items-center gap-x-2 text-black py-3 rounded-full px-4 border'>
                            <FcGoogle />
                            <span>Sign up with Google</span>
                        </button>
                    </div>
                    <div className="my-3 w-[40%] gap-x-2 flex items-center justify-center text-zinc-500">
                        <div className="w-1/2 border-b  border-zinc-200" />
                        <span className='inline-flex text-nowrap'> {"  "}  or signup with email  {"  "}</span>
                        <div className="w-1/2 border-b border-zinc-200" />
                    </div>

                    <div className="mb-3 mt-10 w-[40%] ">

                        <label className='font-bold'>Name</label>
                        <Field name="name" type="text" className='w-full flex justify-center items-center gap-x-2 text-black py-3 rounded-2xl px-4 border' />
                        <ErrorMessage name='name' component={'p'}  className='text-red-500' />

                    </div>

                    <div className="mb-3  w-[40%] ">

                        <label className='font-bold'> Email Address</label>
                        <Field name="email" type="text" className='w-full flex justify-center items-center gap-x-2 text-black py-3 rounded-2xl px-4 border' />
                        <ErrorMessage name='email' component={'p'} className='text-red-500' />


                    </div>
                   
                    <div className="mb-3 w-[40%] ">

                        <label className='font-bold'>Password</label>
                        <Field name="password" type="text" className='w-full flex justify-center items-center gap-x-2 text-black py-3 rounded-2xl px-4 border' />
                        <ErrorMessage name='password' component={'p'} className='text-red-500' />


                    </div>
                    <div className="my-3 w-[40%] ">
                        <button disabled={registerUserResponse.isLoading} className='w-full flex justify-center items-center gap-x-2 text-white py-3 rounded-full px-4 bg-black'>
                            <span>{!registerUserResponse.isLoading?`Sign Up`:'loading...'}</span>
                        </button>
                    </div>

                    <div className="py-10 w-[40%]">
                        <p className='w-full text-center text-sm '>Already have an account? <Link className='underline' href={"/signin"}>Sign In</Link></p>
                    </div>
                </Form>
          </Formik>

        </div>




    )
}

export default RegisterEmail