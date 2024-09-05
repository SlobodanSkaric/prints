import React from 'react'

export default function User() {
  return (
    <>
    <div className='flex justify-center gap-80 mt-7'>
      <div className='flex flex-col justify-center '>
          <div className='flex justify-center'>
            <img src="./src/assets/img/user.jpg" alt="User profile pic" className='w-40 p-1 bg-slate-700 rounded-full' />
          </div>
          <div className='text-center mt-1 font-sans'>
            Slobodan Skaric
          </div>
          <div className='mt-10'>
            <div>Name:    Slobodan Skaric</div>
            <p>Position: Developer</p>
            <p>email: slobodan.skaric@gmail.com</p>
            <p>mobile: 0605444756</p>
          </div>
      </div>
      <div className='flex w-80'>
        <div className='flex flex-col'>
          <div>
            <p>Slobodan Skaric</p>
            <hr/>
          </div>
          <div>
            <p>Position: Developer</p>
            <hr/>
          </div>
          <div>
            <p>Skills: PHP,JS,React,...</p>
            <hr/>
          </div>
          <div>
            <p>Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Quasi, cum quis facere ullam quaerat perferendis voluptas tempora adipisci 
              iusto nihil esse iste quo neque non saepe dicta at, reprehenderit nam?
            </p>
            <hr/>
          </div>
          <div>
            <p>
              Projects: 
              <ul>
                <li>Project1</li>
                <li>Project2</li>
                <li>Project3</li>
              </ul>
            </p>
            <hr/>
          </div>
          <div>
            <p>GitHub: <a href="https://github.com/SlobodanSkaric">GitHub</a></p>
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
