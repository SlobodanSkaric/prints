import React from 'react'

export default function UsersEdit() {
  return (
    <div className='flex  justify-center'>
        <div className='flex flex-col w-full'>
            <div className='flex justify-center w-full gap-1 text-center'>
                <div className='flex flex-col w-1/4'>
                    <label htmlFor="name" className="py-3 font-bold font-sans text-lg">Name</label>
                    <input type="text" placeholder='Enter your name' id='name' className='border border-solid border-neutral-700 rounded-lg px-1 h-12 '/>
                </div>
                
                <div className='flex flex-col w-1/4'>
                    <label htmlFor="email" className="py-3 font-bold font-sans text-lg">Email</label>
                    <input type="email" placeholder='Enter your name' id='email' className='border border-solid border-neutral-700 rounded-lg px-1 h-12 '/>
                </div>
            </div>
            <div className='flex justify-center w-full gap-1'>
                <div className="flex flex-col text-center  w-1/4">
                  <label htmlFor="pass" className="py-3 font-bold font-sans text-lg">Password</label>
                  <input type="password" id="pass" placeholder="Please enter your password" className="border border-solid border-neutral-700 rounded-lg px-1 h-12" />
                </div>
                <div className="flex flex-col text-center  w-1/4">
                  <label htmlFor="pass" className="py-3 font-bold font-sans text-lg">Password</label>
                  <input type="password" id="pass" placeholder="Please enter your password" className="border border-solid border-neutral-700 rounded-lg px-1 h-12" />
                </div>
            </div>
            <div  className="flex flex-col text-center items-center  w-full">
                <label htmlFor="email" className="py-3 font-bold font-sans text-lg">Profile Pictures</label>
                <input  type="file" accept='image/' id="email" placeholder="Please enter your email" className="border border-solid border-neutral-700 rounded-full  " />
            </div>
           {/*<div className='flex justify-center w-full gap-1'>
                <div className="flex flex-col text-center  w-1/4">
                  <label htmlFor="pass" className="py-3 font-bold font-sans text-lg">Position</label>
                  <input type="password" id="pass" placeholder="Please enter your position" className="border border-solid border-neutral-700 rounded-lg px-1 h-12" />
                </div>
                <div className="flex flex-col text-center  w-1/4">
                  <label htmlFor="pass" className="py-3 font-bold font-sans text-lg">Skills</label>
                  <input type="password" id="pass" placeholder="Please enter your sklills" className="border border-solid border-neutral-700 rounded-lg px-1 h-12" />
                </div>
            </div>
            <div className='flex justify-center w-full gap-1 p-7'>
                <div className="flex flex-col text-center  w-1/4">
                  <label htmlFor="pass" className="py-3 font-bold font-sans text-lg">Description</label>
                  <input type="password" id="pass" placeholder="Please enter your description" className="border border-solid border-neutral-700 rounded-lg px-1 h-12" />
                </div>
                <div className="flex flex-col text-center  w-1/4">
                  <label htmlFor="pass" className="py-3 font-bold font-sans text-lg">Projects</label>
                  <input type="password" id="pass" placeholder="Please enter your projects" className="border border-solid border-neutral-700 rounded-lg px-1 h-12" />
                </div>
                <div className="flex flex-col text-center  w-1/4">
                  <label htmlFor="pass" className="py-3 font-bold font-sans text-lg">GitHub</label>
                  <input type="password" id="pass" placeholder="Please enter your GitHub" className="border border-solid border-neutral-700 rounded-lg px-1 h-12" />
                </div>
            </div>*/}
            <div className="flex justify-center  p-3 my-3 ">
                <div>
                    <button className="bg-slate-700 text-white py-3 rounded-xl w-44">Edit</button>
                </div>                  
            </div>
        </div>
    </div>
  )
}
