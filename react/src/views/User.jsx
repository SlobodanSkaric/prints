import React, { useEffect, useState } from 'react'
import axiosClient from '../axios-client';
import { useStateContext } from '../context/ContextProvider';

export default function User() {

    const {user} = useStateContext();


  return (
    <>
    <div className='flex justify-center gap-80 mt-7'>
      <div className='flex flex-col justify-center '>
          <div className='flex justify-center'>
            <img src="./src/assets/img/user.jpg" alt="User profile pic" className='w-40 p-1 bg-slate-700 rounded-full' />
          </div>
          <div className='text-center mt-1 font-sans'>
            { user.name }
          </div>
          <div className='mt-10'>
            <div>Name: { user.name }</div>
            <p>Position: { user.postion }</p>
            <p>email: { user.email }</p>
            <p>mobile: 0605444756</p>
          </div>
      </div>
      <div className='flex w-80'>
        <div className='flex flex-col'>
          <div>
            <p>{ user.name }</p>
            <hr/>
          </div>
          <div>
            <p>Position: { user.postion }</p>
            <hr/>
          </div>
          <div>
            <p>Skills: { user.skills }</p>
            <hr/>
          </div>
          <div>
            <p>
                Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, exercitationem dolor. Animi officia, dicta consequuntur facilis quisquam sunt debitis optio, perferendis provident minima ea eum accusamus culpa, quod earum tempore.{ user.description }
            </p>
            <hr/>
          </div>
          <div>
            <p>
              Projects:
              <ul>
                <li>{ user.projects }</li>
              </ul>
            </p>
            <hr/>
          </div>
          <div>
            <p>GitHub: <a href="https://github.com/SlobodanSkaric">{ user.github }</a></p>
          </div>
        </div>
      </div>
    </div>
    <div className='flex justify-center mt-28'>
     <button className='border-2 py-3 px-7 hover:bg-slate-300 hover:text-slate-100  text-slate-700 rounded-xl'>Edit</button>
    </div>
   </>
  )
}
