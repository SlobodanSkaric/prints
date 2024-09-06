import React from 'react'
import {Outlet} from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div>
        <div className='flex px-11 py-7 justify-center text-center text-white gap-1'>
            <a href="/tickets" className="hover:bg-slate-300 hover:text-slate-100 text-slate-700 border-2 py-3 px-7">Nalozi</a>
            <a href="/history" className="bhover:bg-slate-300 hover:text-slate-100 text-slate-700 border-2 py-3 px-7">Istorija</a>
            <a href="/pass" className="hover:bg-slate-300 hover:text-slate-100 text-slate-700 border-2 py-3 px-7">Knizenje</a>
            <a href="/user" className="hover:bg-slate-300 hover:text-slate-100 text-slate-700 border-2 py-3 px-7">Slobodan Skaric</a>
        </div>
        <div>
            <main>
                <Outlet/>
            </main>
        </div>
    </div>

  )
}
