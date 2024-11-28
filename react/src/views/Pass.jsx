import React, { useRef, useState } from 'react'
import axiosClient from '../axios-client';

export default function Pass() {
  const [checkedValue, setCheckedValue] = useState([
    {"id":1, "labele":"348810", "value":"348810", "quantity":0, "checked": false},
    {"id":2, "labele":"327120", "value":"327120", "quantity":0, "checked": false},
    {"id":3, "labele":"521342", "value":"521342", "quantity":0, "checked": false},
  ]);
  const ticketNumber = useRef();
  const [messages, setMesages] = useState();
  const [checkedMessage, setCheckedMessage] = useState(false);



  const checkBoxChange = (index) =>{
    const setShecked = [...checkedValue];

    setShecked[index].checked = !setShecked[index].checked;
    setCheckedValue(setShecked);
  }

  const  onChangeQuoantity = (e,index) => {
      const setQuantity = [...checkedValue];

      setQuantity[index].quantity = parseInt(e.target.value,10);
      setCheckedValue(setQuantity);
  }

  const sendData = (e) => {
    e.preventDefault();

    const checkedItem = checkedValue.filter(item => item.checked === true);

    if(checkedItem.length > 0){

        const payload = {
            "tickets_number": ticketNumber.current.value,
            "commnets": "Some coments",
            "description": "Some description",
        }

        checkedItem.forEach(item => {
            payload[`pri_${item.value}`] = parseInt(item.quantity,10)
        })



        axiosClient.post("/ticketsstore", payload)
            .then(({data}) => {
              console.log(data);
                if(data.message){
                  setMesages("Nalog je uspesno dodat!");
                }
                
                setTimeout(() => {
                    setMesages();
                },3000)
            }).catch(err => {
              setMesages("Nalog vec postoji");//Promenti boji pozadine
              setCheckedMessage(true);
            })
    }
  }



  return (
    <div>
      <div>
        <div className='flex   justify-center'>
          <div className='w-1/3'>
            <form action="" onSubmit={sendData}>
            <div className='flex flex-col'>
              <div className='flex w-full flex-col text-center'>
                <label htmlFor="brpass" className='py-3'>Broj Naloga</label>
                <input ref={ticketNumber} type="text" id='brpass' className='border border-solid border-neutral-700 rounded-lg'/>
                <div className='flex flex-col items-center'>
                    {checkedValue.map((option,index) =>(
                      <div key={option.id} className='flex justify-around mr-3 py-3'>
                        <label>
                          <input
                          type="checkbox"
                          value={option.value}
                          checked={option.checked}
                          onChange={() => checkBoxChange(index)}
                          />
                          <span> </span>{option.labele}
                        </label>
                        <div >
                          {option.checked && (
                            <input type="number"  value={option.quantity} onChange={(e) => onChangeQuoantity(e, index)}  className='ml-7 border border-solid border-neutral-700 rounded-lg text-center'/>
                          )}

                        </div>
                      </div>
                    ))}
                </div>
                </div>
              <div className='text-center py-7'>
                <button className='hover:bg-green-700 hover:text-slate-100 text-slate-700 border-2 py-3 px-7' >Submit</button>
              </div>
              </div>
            </form>
            <div className='text-center'>
                {messages && (
                    <div className={`p-3 ${checkedMessage ? "bg-red-700" : "bg-green-700"} text-white`}>{messages}</div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
