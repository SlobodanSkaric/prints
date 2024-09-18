import React from 'react';


export default function Dashbord() {
  return (
    <div className='flex justify-evenly gap-3 m-7 h-full'>
        <div className='border border-solid border-neutral-700 py-3 px-10 w-1/3 rounded-xl'>
            <div className='flex'>
                <div className='text-center w-full'>
                    <div className='mb-5 border-b-2 flex justify-around'>
                        <div className='text-xl'>
                            Nalozi
                        </div>
                        <div>
                            <input className='rounded-lg px-3 pt-0 text-slate-700' type="text" placeholder='pretraga'/>
                        </div>
                    </div>
                    <div className='w-full overflow-y-scroll pb-7 h-80 text-center'>
                        <ul>
                            <li>
                                <div className="flex justify-around">
                                    <div className="">
                                        123456711
                                    </div>
                                    <div className="">
                                        <button className="border border-solid border-neutral-700 w-auto py-1 px-3 mb-3 rounded-xl">Show</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex justify-around">
                                    <div className="">
                                        123456711
                                    </div>
                                    <div className="">
                                        <button className="border border-solid border-neutral-700 w-auto py-1 px-3 mb-3 rounded-xl">Show</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex justify-around">
                                    <div className="">
                                        123456711
                                    </div>
                                    <div className="">
                                        <button className="border border-solid border-neutral-700 w-auto py-1 px-3 mb-3 rounded-xl">Show</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex justify-around">
                                    <div className="">
                                        123456711
                                    </div>
                                    <div className="">
                                        <button className="border border-solid border-neutral-700 w-auto py-1 px-3 mb-3 rounded-xl">Show</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex justify-around">
                                    <div className="">
                                        123456711
                                    </div>
                                    <div className="">
                                        <button className="border border-solid border-neutral-700 w-auto py-1 px-3 mb-3 rounded-xl">Show</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex justify-around">
                                    <div className="">
                                        123456711
                                    </div>
                                    <div className="">
                                        <button className="border border-solid border-neutral-700 w-auto py-1 px-3 mb-3 rounded-xl">Show</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex justify-around">
                                    <div className="">
                                        123456711
                                    </div>
                                    <div className="">
                                        <button className="border border-solid border-neutral-700 w-auto py-1 px-3 mb-3 rounded-xl">Show</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className='border border-solid border-neutral-700 py-3 px-10 w-1/3  rounded-xl flex-1'>
            < div className='flex'>
                <div className='text-center w-full'>
                    <div className='text-xl mb-5 border-b-2'>Info</div>
                    <div className='flex justify-around'>
                        <table className='table-auto w-full material'>
                            <thead>
                                <tr>
                                    <td>
                                        Materijal Stanje
                                    </td>
                                    <td>
                                        Isporuka
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        348810 - <span>10000 kom</span> <button className="border border-solid border-neutral-700 w-auto py-1 px-3 mb-3 rounded-xl">Show</button>
                                    </td>
                                    <td>
                                        348810 - <span>10000 kom</span> - <span>27.08.2023</span> <button className="border border-solid border-neutral-700 w-auto py-1 px-3 mb-3 rounded-xl">Show</button>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        348810 - <span>10000 kom</span><button className="border border-solid border-neutral-700 w-auto py-1 px-3 mb-3 rounded-xl">Show</button>
                                    </td>
                                    <td>
                                        348810 - <span>10000 kom</span> - <span>27.08.2023</span><button className="border border-solid border-neutral-700 w-auto py-1 px-3 mb-3 rounded-xl">Show</button>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        327082 - <span>20000 kom</span> <button className="border border-solid border-neutral-700 w-auto py-1 px-3 mb-3 rounded-xl">Show</button>
                                    </td>
                                    <td>
                                        327082 - <span>20000 kom</span> - <span>27.08.2023</span><button className="border border-solid border-neutral-700 w-auto py-1 px-3 mb-3 rounded-xl">Show</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        327082 - <span>20000 kom</span> <button className="border border-solid border-neutral-700 w-auto py-1 px-3 mb-3 rounded-xl">Show</button>
                                    </td>
                                    <td>
                                        327082 - <span>20000 kom</span> - <span>27.08.2023</span><button className="border border-solid border-neutral-700 w-auto py-1 px-3 mb-3 rounded-xl">Show</button>
                                    </td>
                                </tr>

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
