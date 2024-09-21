import React, { useRef } from 'react'
import { useStateContext } from '../context/ContextProvider';
import axiosClient from '../axios-client';
import {useNavigate} from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate()

  const {user,setUser, setToken} = useStateContext();

  const onSubmit = (e) => {

    e.preventDefault();

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }


    axiosClient.post("/login", payload)
      .then(({data}) => {
        setUser(data.user);
        setToken(data.token);

        navigate("/user");
      }).catch(err => {
        console.log(err);
      })
  }

console.log(user);

  return (

    <div className="flex justify-center py-3">

        <div className="flex flex-col  border border-solid border-neutral-700 rounded-xl p-3 w-1/3">
            <div className="text-center py-3 text-5xl">
                <h1>Login</h1>
            </div>

            <form onSubmit={onSubmit}>
                <div className="flex flex-col text-center p-3">
                  <label htmlFor="email" className="py-3 font-bold font-sans text-lg">Email</label>
                  <input ref={emailRef} type="email" id="email" placeholder="Please enter your email" className="border border-solid border-neutral-700 rounded-lg px-1 h-12" />
                </div>
                <div className="flex flex-col text-center p-3">
                  <label htmlFor="pass" className="py-3 font-bold font-sans text-lg">Password</label>
                  <input ref={passwordRef} type="password" id="pass" placeholder="Please enter your email" className="border border-solid border-neutral-700 rounded-lg px-1 h-12" />
                </div>
                <div className="flex flex-col text-center p-3 my-3">
                  <button className="bg-slate-700 text-white py-3 rounded-xl">Login</button>
                </div>
           </form>
           <div className="text-center">
            <h1>If yout hav not account please registration <a href="/signup" className="text-red-700">here</a></h1>
           </div>
        </div>
    </div>
  )
}
