import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Gusetlayout() {
  return (
    <>
        <div>
            Guset Layout
        </div>
        <div>
            <main>
                <Outlet/>
            </main>
        </div>
    </>
  )
}
