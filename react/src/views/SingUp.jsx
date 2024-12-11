import React, { useRef, useState } from 'react'
import axiosClient from '../axios-client';
import { useStateContext } from '../context/ContextProvider';

export default function SingUp() {
  const nameRef             = useRef();
  const emailRef            = useRef();
  const passwordRef         = useRef();
  const confirmePassworRef  = useRef();
  const [profileImages, setProfileImages]     = useState(null);

  const {setUser, setToken} = useStateContext();


  const hendleFileChange = (e) =>{
    const file = e.target.files[0];
    setProfileImages(file);
  }

  const onSubmit = (e) =>{

    e.preventDefault();
    

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: confirmePassworRef.current.value,
      profile_images:profileImages
    }

    console.log(payload);

    axiosClient.post("/signup", payload)
      .then(({data}) => {
        setUser(data.user);
        setToken(data.token);
      }).catch(err => {
        console.log("Error code" +err);
      });
  }
  return (
    <div className="flex justify-center py-3">

        <div className="flex flex-col  border border-solid border-neutral-700 rounded-xl p-3 w-1/3">
            <div className="text-center py-3 text-5xl">
                <h1>SignUp</h1>
            </div>

            <form onSubmit={onSubmit}>
                <div className="flex flex-col text-center p-3">
                <label htmlFor="name" className="py-3 font-bold font-sans text-lg">Name</label>
                <input ref={nameRef} type="text" id="name" placeholder="Please enter name" className="border border-solid border-neutral-700 rounded-lg px-1 h-12" />
                </div>
                <div className="flex flex-col text-center p-3">
                  <label htmlFor="email" className="py-3 font-bold font-sans text-lg">Email</label>
                  <input ref={emailRef} type="email" id="email" placeholder="Please enter your email" className="border border-solid border-neutral-700 rounded-lg px-1 h-12" />
                </div>
                <div className="flex flex-col text-center p-3">
                  <label htmlFor="password" className="py-3 font-bold font-sans text-lg">Password</label>
                  <input ref={passwordRef} type="password" id="password" placeholder="Please enter your password" className="border border-solid border-neutral-700 rounded-lg px-1 h-12" />
                </div>
                <div className="flex flex-col text-center p-3">
                  <label htmlFor="passwordc" className="py-3 font-bold font-sans text-lg">Password Confirme</label>
                  <input ref={confirmePassworRef} type="password" id="passwordc" placeholder="Please enter confirme password" className="border border-solid border-neutral-700 rounded-lg px-1 h-12" />
                </div>
                <div className="flex flex-col text-center items-center p-3">
                  <label htmlFor="email" className="py-3 font-bold font-sans text-lg">Profile Pictures</label>
                  <input onChange={hendleFileChange} type="file" accept='image/' id="email" placeholder="Please enter your email" className="border border-solid border-neutral-700 rounded-full  " />
                </div>
                <div className="flex flex-col text-center p-3 my-3">
                  <button className="bg-slate-700 text-white py-3 rounded-xl">SignUp</button>
                </div>
           </form>
           <div className="text-center">
            <h1>If yout hav  account please login <a href="/login" className="text-red-700">here</a></h1>
           </div>
        </div>
    </div>
  )
}
