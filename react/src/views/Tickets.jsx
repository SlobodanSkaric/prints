import React from 'react'

export default function Tickets() {
  return (
    <div>
        <div className='flex justify-center'>
            <h1 className='text-3xl'>Nalozi</h1>
        </div>
        <div className='flex text-center justify-around'>
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
                                <th>Kolicina</th>
                                <th>Datum Izrade</th>
                                <th>Datum Izdavanja</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1234567</td>
                                <td>100</td>
                                <td>05.09.2024</td>
                                <td>07.09.2024</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>1234567</td>
                                <td>100</td>
                                <td>05.09.2024</td>
                                <td>07.09.2024</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>1234567</td>
                                <td>100</td>
                                <td>05.09.2024</td>
                                <td>07.09.2024</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>1234567</td>
                                <td>100</td>
                                <td>05.09.2024</td>
                                <td>07.09.2024</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>1234567</td>
                                <td>100</td>
                                <td>05.09.2024</td>
                                <td>07.09.2024</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>1234567</td>
                                <td>100</td>
                                <td>05.09.2024</td>
                                <td>07.09.2024</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>1234567</td>
                                <td>100</td>
                                <td>05.09.2024</td>
                                <td>07.09.2024</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='p-3 text-2xl'>
                    <div>
                        Spisak materijala
                    </div>
                </div>
        </div>
    </div>
  )
}
