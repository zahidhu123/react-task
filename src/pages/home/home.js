import React, { useState } from 'react'
import AddUser from '../../component/add-user/addUser';
import Navbar from '../../component/navbar/navbar'

export default function Home() {

    const demolist = [
        {
            product: 'Mobile',
            price: '10000',
            

        },
        {
            product: 'Laptop',
            price: '50000',
        },
        {
            product: 'Product1',
            price: '100',
        },
    ]

    const [item, setItem] = useState(demolist);


    // useEffect(() => {
    //     setItem(oldArray => [...oldArray, user])
    // }, [user]);

    function onUserAdd(data) {
        setItem(oldArray => [...oldArray, data])
    }



    function onDelete(index) {
        setItem([
            ...item.slice(0, index),
            ...item.slice(index + 1, item.length)
        ]);
    }

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-8">
                        <div className="row p-0 justify-content-between">
                            <div className="col-md-6">
                                <form class="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                            <div className="col-md-3">
                                <div className='d-flex justify-content-end'>
                                    <AddUser handleData={(data) => onUserAdd(data)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <table class="table shadow rounded border mt-2">
                            <thead className='table-dark'>
                                <tr>
                                    <th scope="col">Product name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody className='table-secondary'>
                                {item.map((data, index) => {
                                    return <tr>
                                        <td>{data.product}</td>
                                        <td>{data.price}</td>
                                        <td><i class="fa-solid fa-trash-can delete" onClick={() => { onDelete(index) }}></i></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
