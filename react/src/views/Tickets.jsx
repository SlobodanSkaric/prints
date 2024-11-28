import React, { useEffect, useState } from 'react'
import axiosClient from '../axios-client';
import {format} from "date-fns";

export default function Tickets() {
    const [tickets, setTicket] = useState([]);
    const [pannel, setPannel] = useState(false);
    const [onetickets, setOnetickets] = useState({});
    const [checkboxTikets, setCheckboxTickets] = useState(false);

    useEffect(() => {
        axiosClient.get("/tickets")
            .then(({data}) => {
                setTicket(data);
            }).catch(error => {
                console.log(error)
            });
    },[]);

    const showPannel = (id) =>{
        setPannel(!pannel);

            axiosClient.get("/onetickets/" + id)
                .then(({data}) => {
                    setOnetickets(data);
                }).catch(error => {
                    console.log(error)
                });


    }

    const closeDialog = () => {
        setPannel(false);
    }


    const updateTickets = (id) => {
        if(checkboxTikets){
            try{
                const updatedTimes = format(new Date(), 'yyyy-MM-dd HH:mm:ss');

                axiosClient.put("/updatetickets/" + id, {exit: updatedTimes})
                    .then(({data}) => {
                        setTicket(data.tickets);
                    });
            }catch(error){
                console.log(error);
            }

            closeDialog();
        }
    }

  return (
    <div>
        <div className='flex justify-center'>
            <h1 className='text-3xl'>Nalozi</h1>
        </div>

        <div className='flex text-center justify-around'>
        {pannel && (
                    <div className='flex px-80 bg-white absolute top-7   border-2 border-solid border-neutral-700 p-7 '>
                                    <div className='relative flex flex-col'>
                                        <div className='flex justify-around border-b-2  border-solid border-neutral-700 py-7'>
                                            Detalji naloga {onetickets.tickets_number}
                                                <input type="checkbox" onClick={(e) => setCheckboxTickets(e.target.checked)}/>
                                        </div>
                                       <div className=' items-start border-b-2  border-solid border-neutral-700 py-7'>
                                            <div>
                                                <div className='pb-2'>Materijal</div>
                                                <table className='w-full'>
                                                    <tbody>
                                                        <tr>
                                                            <td>Sifra</td>
                                                            <td>Kolicina</td>
                                                        </tr>
                                                        <tr>
                                                            <td>348810</td>
                                                            <td>{onetickets.pri_348810 ? onetickets.pri_348810 : 0}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>327120</td>
                                                            <td>{onetickets.pri_327120 ? onetickets.pri_327120 : 0}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>521342</td>
                                                            <td>{onetickets.pri_521342 ? onetickets.pri_521342 : 0}</td>
                                                        </tr>
                                                        
                                                    </tbody>
                                                </table>
                                            </div>
                                       </div>
                                       <div className='border-b-2  border-solid border-neutral-700 '>
                                            <div className=''>
                                                <div className='py-2'>Comments</div>
                                                <div className='py-5'>
                                                    {onetickets.commnets}
                                                </div>
                                            </div>                                            
                                       </div>
                                       <div>
                                            <div className='border-b-2  border-solid border-neutral-700 whitespace-normal'>
                                                <div className='py-2 whitespace-normal'>Descriptions</div>
                                                <div className='py-5'>
                                                    {onetickets.description}
                                                </div>
                                            </div>                                            
                                       </div>
                                       <div className='flex py-2'>
                                            <button onClick={() => updateTickets(onetickets.id)} className='hover:bg-green-700 hover:text-slate-100 text-slate-700 border-2 py-3 px-7'>Sacuvaj</button>
                                            <button onClick={closeDialog} className='hover:bg-green-700 hover:text-slate-100 text-slate-700 border-2 py-3 px-7'>Zatvori</button>
                                        </div>
                                    </div>

                    </div>
                )
                }
            <div>
                <div className='p-3 text-2xl'>
                    Spisak naloga
                </div>
                <div className='p-3'>
                    <table className='border-collapse border-2 material border-solid border-neutral-700'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Broj Naloga</th>
                                <th>Operater</th>
                                <th>Datum Izrade</th>
                                <th>Datum Izdavanja</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tickets.map((option, index) => (
                                <tr key={option.id}>
                                    <td>{option.id}</td>
                                    <td className='hover:cursor-pointer' onClick={() => showPannel(option.id)}>{option.tickets_number}</td>
                                    <td>{option.user.name}</td>
                                    <td>{option.created_at}</td>
                                    <td>{option.exit ? option.exit : "Nije izdato"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>


            </div>
        </div>
    </div>
  )
}
