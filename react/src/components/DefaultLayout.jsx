import React, { useRef, useState } from 'react'
import {Navigate, Outlet} from "react-router-dom";
import { useStateContext } from '../context/ContextProvider';
import Pusher from 'pusher-js';
import axiosClient from '../axios-client';




export default function DefaultLayout() {  


    const {user, token} = useStateContext();
    const userData = JSON.parse(localStorage.getItem("USER_DATA"));
    const [panelState, setPanelState] = useState(false);
    const messagesRef = useRef(); 
    const [visibility, setVisbility] = useState(0);
    const [unreadMessages, setUnreadMessages] = useState(0);

   if(!token){
        return <Navigate to="/login"/>
    }

    const showPanel = () =>{
        setPanelState(!panelState);
    }

   
    const messageSend = (e) => {
        e.preventDefault();

        const paylod = {
            "notes" : messagesRef.current.value,
            /* "priority" : "",
            "visibility": "" */
        }

        axiosClient.post("/user/addnotes", paylod)
            .then(({data}) => {
                console.log(data);
            }).catch((error) => {
                console.log(error);
            })
    }

   

        
    const pusher = new Pusher('e641e64ee0a2202cea1c', {
            cluster: 'eu',
            encrypted: true
        });

            
    const channel = pusher.subscribe('notess');


    channel.bind('note.created', (data) => {
        setVisbility(data.notess.visibility);
        console.log(data.notess.visibility);
    });
            

  return (
    
    <div className='h-screen relative'>
        <div className='flex px-11 py-7 justify-center text-center text-white gap-1'>
            <a href="/tickets" className="hover:bg-green-700 hover:text-slate-100 text-slate-700 border-2 py-3 px-7">Nalozi</a>
            <a href="/pass" className="hover:bg-green-700 hover:text-slate-100 text-slate-700 border-2 py-3 px-7">Knizenje</a>
            <a href="/user" className="hover:bg-green-700 hover:text-slate-100 text-slate-700 border-2 py-3 px-7">{userData.name}</a> 
            
        </div>
        <div>
            <main>
                <Outlet/>
            </main>
        </div>
        <div className='absolute bottom-7 right-7'>
            <div className=''>
                <div className='flex-col justify-center'>
                    {visibility === 0 ? <div className='bg-slate-100 mb-1 py-1 text-center text-slate-700'>No new messages</div> : <div className='bg-red-700 mb-1 py-1 text-center text-white'>New messages</div>}
                    <button onClick={showPanel} className=' bg-slate-700 text-slate-100 px-7 py-2 hover:bg-slate-100 hover:border-2 hover:text-slate-700'>{panelState ? "Zatvori notes" : "Otvori notes"}</button>                    
                </div>
            </div>
        </div>

        {panelState && <div className='absolute bg-green-700  flex flex-col items-center bot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 px-7 py-2 w-1/3 h-1/3'>
            <div className='py-2 text-white'>Notes</div>
            <div className='w-full'> 
                <textarea ref={messagesRef} rows="7" name="" id="" className='border-2 w-full h-full'></textarea>
            </div>
            <div className='py-3'>
                <button className='bg-white py-1 px-2' onClick={messageSend}>Sacuvaj Poruku</button>
            </div>
        </div>}
    </div>

  )
}
