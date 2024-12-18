import React, { useContext, useRef, useState } from 'react'
import axiosClient from '../axios-client';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';

export default function UsersEdit() {   
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("USER_DATA")));
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [useerImages, setUserImages] = useState();
  const {user,setUser} = useStateContext();
  const navigate = useNavigate();

    const onChangeUserData = (e) =>{

      const {name, value} = e.target;

      setUserData((prevData) => ({
        ...prevData,
        [name] : value
      }))
    }

    const onChangePassword = (e) => {
      const pass = e.target.value;
      setPassword(pass);
    }

    const onChangePasswordConfirmeds = (e) => {
      const passconf = e.target.value;
      setPasswordConfirmation(passconf);
    }

    const onChangeImages = (e) => {
      const images = e.target.files[0];
      setUserImages(images); 
    }



  const editData = (e) => {
    e.preventDefault();

    const payload = {
      name: userData.name,
      email: userData.email,
      password: password,
      password_confirmation: passwordConfirmation,
      profile_images:useerImages
    }


    axiosClient.post(`/user/update/${userData.id}`, payload)
      .then((data) => {
        localStorage.setItem("USER_DATA",JSON.stringify(data.data));
        navigate("/user")
      }).catch(error => {
        console.log("error");
      })
  }
  
  return (
    <form onSubmit={editData}>
    <div className='flex  justify-center'>
     
        <div className='flex flex-col w-full'>
            <div className='flex justify-center'>
              <img src={`http://localhost:8000/storage/${userData.profile_images}`} alt="Profile images"  className=' w-36 h-36 rounded-full'/>
            </div>
            <div className='flex justify-center w-full gap-1 text-center'>
                <div className='flex flex-col w-1/4'>
                    <label htmlFor="name" className="py-3 font-bold font-sans text-lg">Name</label>
                    <input name='name' onChange={onChangeUserData} type="text" value={userData.name} id='name' className='border border-solid border-neutral-700 rounded-lg px-1 h-12 '/>
                </div>
                
                <div className='flex flex-col w-1/4'>
                    <label htmlFor="email" className="py-3 font-bold font-sans text-lg">Email</label>
                    <input name='email' onChange={onChangeUserData}  type="email" value={userData.email} id='email' className='border border-solid border-neutral-700 rounded-lg px-1 h-12 '/>
                </div>
            </div>
            <div className='flex justify-center w-full gap-1'>
                <div className="flex flex-col text-center  w-1/4">
                  <label htmlFor="pass" className="py-3 font-bold font-sans text-lg">Password</label>
                  <input name='password' onChange={onChangePassword} type="password" id="pass" placeholder="Please enter your password" className="border border-solid border-neutral-700 rounded-lg px-1 h-12" />
                </div>
                <div className="flex flex-col text-center  w-1/4">
                  <label htmlFor="passc" className="py-3 font-bold font-sans text-lg">Password</label>
                  <input name='password_confirmation' onChange={onChangePasswordConfirmeds} type="password" id="passc" placeholder="Please enter your password" className="border border-solid border-neutral-700 rounded-lg px-1 h-12" />
                </div>
            </div>
            <div  className="flex flex-col text-center items-center  w-full">
                <label htmlFor="profileimages" className="py-3 font-bold font-sans text-lg">Profile Pictures</label>
                <input onChange={onChangeImages}   type="file" accept='image/' id="profileimages"  className="border border-solid border-neutral-700 rounded-full  " />
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
                    <button type='submit' className="bg-slate-700 text-white py-3 rounded-xl w-44">Edit</button>
                </div>                  
            </div>
        </div>
      
    </div>
    </form>
  )
}
