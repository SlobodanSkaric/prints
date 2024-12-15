import React, { useEffect, useState } from 'react'
import axiosClient from '../axios-client';
import { useStateContext } from '../context/ContextProvider';
import { useQuery } from '@tanstack/react-query';

export default function User() {

  const {user} = useStateContext();
  

  const userData = JSON.parse(localStorage.getItem("USER_DATA"));
  


  return (
    <>
    <div className='flex justify-center gap-80 mt-7'>
      <div className='flex flex-col justify-center '>
          <div className='flex justify-center'>
            <img src="./src/assets/img/user.jpg" alt="User profile pic" className='w-40 p-1 bg-slate-700 rounded-full' />
          </div>
          <div className='text-center mt-1 font-sans'>
            { userData.name }
          </div>
          <div className='mt-10'>
            <div>Name: { userData.name }</div>
            <p>Position: { userData.postion }</p>
            <p>email: { userData.email }</p>
            <p>mobile: 0605444756</p>
          </div>
      </div>
      <div className='flex w-80'>
        <div className='flex flex-col'>
          <div>
            <p>{ userData.name }</p>
            <hr/>
          </div>
          <div>
            <p>Position: { userData.postion }</p>
            <hr/>
          </div>
          <div>
            <p>Skills: { userData.skills }</p>
            <hr/>
          </div>
          <div>
            <p>
              { userData.description }
            </p>
            <hr/>
          </div>
          <div>
            <p>
              Projects:
              <ul>
                <li>{ userData.projects }</li>
              </ul>
            </p>
            <hr/>
          </div>
          <div>
            <p>GitHub: <a href="https://github.com/SlobodanSkaric">{ userData.github }</a></p>
          </div>
        </div>
      </div>
    </div>
    <div className='flex justify-center mt-28'>
     <button className='border-2 py-3 px-7 hover:bg-slate-300 hover:text-slate-100  text-slate-700 rounded-xl'><a href="/usersedit">Edit</a></button>
    </div>
   </>
  )
}
