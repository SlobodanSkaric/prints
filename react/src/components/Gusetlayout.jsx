import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Gusetlayout() {
  return (
    <>
        <div>
           
        </div>
        <div>
            <main>
                <Outlet/>
            </main>
        </div>
    </>
  )
}
