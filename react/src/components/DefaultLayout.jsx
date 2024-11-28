import React from 'react'
import {Navigate, Outlet} from "react-router-dom";
import { useStateContext } from '../context/ContextProvider';

export default function DefaultLayout() {
    const {user, token} = useStateContext();

   if(!token){
        return <Navigate to="/login"/>
    }
  return (
    <div>
        <div className='flex px-11 py-7 justify-center text-center text-white gap-1'>
            <a href="/tickets" className="hover:bg-green-700 hover:text-slate-100 text-slate-700 border-2 py-3 px-7">Nalozi</a>
            <a href="/pass" className="hover:bg-green-700 hover:text-slate-100 text-slate-700 border-2 py-3 px-7">Knizenje</a>
            <a href="/user" className="hover:bg-green-700 hover:text-slate-100 text-slate-700 border-2 py-3 px-7">Slobodan Skaric</a>
        </div>
        <div>
            <main>
                <Outlet/>
            </main>
        </div>
    </div>

  )
}
