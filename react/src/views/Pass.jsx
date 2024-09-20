import React, { useState } from 'react'

export default function Pass() {
  const [checkedValue, setCheckedValue] = useState([
    {"id":1, "labele":"348810", "value":"348810", "quantity":1, checked: false},
    {"id":2, "labele":"327120", "value":"327120", "quantity":1, checked: false},
    {"id":3, "labele":"521342", "value":"521342", "quantity":1, checked: false},
  ]);

  /* const checkedOptions = [


  ]; */

  const checkBoxChange = (index) =>{
    const setShecked = [...checkedValue];

    setShecked[index].checked = !setShecked[index].checked;

    setCheckedValue(setShecked);
  }

  const onChangeQuoantity = (e,index) => {
      const setQuantity = [...checkedValue];

      setQuantity[index].quantity = e.target.value;
      setCheckedValue[setQuantity];
  }

  console.log(checkedValue);

  return (
    <div>
      <div>
        <div className='flex   justify-center'>
          <div className='w-1/3'>
            <form action="">
              <div className='flex w-full flex-col text-center'>
                <label htmlFor="brpass" className='py-3'>Broj Naloga</label>
                <input type="text" id='brpass' className='border border-solid border-neutral-700 rounded-lg'/>
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
                            <input type='number'  value={option.quantity} onChange={(e) => onChangeQuoantity(e, index)} />
                          )}

                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className='text-center py-7'>
                <button className='hover:bg-slate-300 hover:text-slate-100 text-slate-700 border-2 py-3 px-7'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
