import React from 'react'

export default function SingUp() {
  return (
    <div className="flex justify-center py-3">

        <div className="flex flex-col  border border-solid border-neutral-700 rounded-xl p-3 w-1/3">
            <div className="text-center py-3 text-5xl">
                <h1>SignUp</h1>
            </div>
            <div className="flex flex-col text-center p-3">
            <label htmlFor="name" className="py-3 font-bold font-sans text-lg">Name</label>
            <input type="text" id="name" placeholder="Please enter your email" className="border border-solid border-neutral-700 rounded-lg px-1 h-12" />
           </div>
           <div className="flex flex-col text-center p-3">
            <label htmlFor="email" className="py-3 font-bold font-sans text-lg">Email</label>
            <input type="email" id="email" placeholder="Please enter your email" className="border border-solid border-neutral-700 rounded-lg px-1 h-12" />
           </div>
           <div className="flex flex-col text-center p-3">
            <label htmlFor="password" className="py-3 font-bold font-sans text-lg">Password</label>
            <input type="password" id="password" placeholder="Please enter your email" className="border border-solid border-neutral-700 rounded-lg px-1 h-12" />
           </div>
           <div className="flex flex-col text-center p-3 my-3">
            <button className="bg-slate-700 text-white py-3 rounded-xl">SignUp</button>
           </div>
           <div className="text-center">
            <h1>If yout hav  account please login <a href="/login" className="text-red-700">here</a></h1>
           </div>
        </div>
    </div>
  )
}
