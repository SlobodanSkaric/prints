import React from 'react'
import {Navigate, Outlet} from "react-router-dom";
import { useStateContext } from '../context/ContextProvider';

export default function DefaultLayout() {
    const {user, token, setToken} = useStateContext();

    if(!token){
        return <Navigate to="/"/>
    }
  return (
    <div>
        <div className='flex px-11 py-7 justify-center text-center text-white gap-1'>
            <a href="#" className="bg-slate-700 py-3 px-7 hover:bg-slate-300 hover:text-slate-800">Nalozi</a>
            <a href="#" className="bg-slate-700 py-3 px-7 hover:bg-slate-300 hover:text-slate-800">Istorija</a>
            <a href="#" className="bg-slate-700 py-3 px-7 hover:bg-slate-300 hover:text-slate-800">Knizenje</a>
            <a href="#" className="bg-slate-700 py-3 px-7 hover:bg-slate-300 hover:text-slate-800">Slobodan Skaric</a>
        </div>
        <div>
            <main>
                <Outlet/>
            </main>
        </div>
    </div>

  )
}
