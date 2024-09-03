import React from 'react';


export default function Dashbord() {
  return (
    <div className='flex justify-evenly gap-3 m-7 h-full'>
        <div className='bg-slate-500 text-white py-3 px-10 w-1/3 rounded-xl'>
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
                            <li>123456711</li>
                            <li>123456711</li>
                            <li>123456717</li>
                            <li>123456711</li>
                            <li>123456711</li>
                            <li>123456717</li>
                            <li>123456711</li>
                            <li>123456711</li>
                            <li>123456717</li>
                            <li>123456711</li>
                            <li>123456711</li>
                            <li>123456717</li>
                            <li>123456711</li>
                            <li>123456711</li>
                            <li>123456717</li>
                            <li>123456711</li>
                            <li>123456711</li>
                            <li>123456717</li>
                            <li>123456711</li>
                            <li>123456711</li>
                            <li>123456717</li>
                            <li>123456711</li>
                            <li>123456711</li>
                            <li>123456717</li>
                            <li>123456711</li>
                            <li>123456711</li>
                            <li>123456717</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className='text-white py-3 px-10 w-1/3 bg-slate-500 rounded-xl flex-1'>
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
                                        348810 - <span>10000 kom</span>
                                    </td>
                                    <td>
                                        348810 - <span>10000 kom</span> - <span>27.08.2023</span>
                                    </td>
                                    
                                </tr>
                                <tr>
                                    <td>
                                        348810 - <span>10000 kom</span>
                                    </td>
                                    <td>
                                        348810 - <span>10000 kom</span> - <span>27.08.2023</span>
                                    </td>
                                    
                                </tr>
                                <tr>
                                    <td>
                                        327082 - <span>20000 kom</span> 
                                    </td>
                                    <td>
                                        327082 - <span>20000 kom</span> - <span>27.08.2023</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        327082 - <span>20000 kom</span> 
                                    </td>
                                    <td>
                                        327082 - <span>20000 kom</span> - <span>27.08.2023</span>
                                    </td>
                                </tr>
                                
                            </tbody>
                               
                        </table>
                       {/*  <div>
                            <div className='mb-3'>Materijal Stanje</div>
                            <div>
                                <ul>
                                    <li></li>
                                    <li>348809 - <span>15000 kom</span></li>
                                    <li>327082 - <span>20000 kom</span></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h1>Isporuka</h1>
                            </div>
                            <div>
                                <ul>
                                    <li>348810 - <span>10000 kom</span> - <span>27.08.2023</span></li>
                                    <li>348809 - <span>15000 kom</span> - <span>27.08.2023</span></li>
                                    <li>327082 - <span>20000 kom</span> - <span>27.08.2023</span></li>
                                </ul>
                            </div>
                        </div>  */}
                    </div>
                </div>
            </div>
        </div>
    </div> 
  )
}
