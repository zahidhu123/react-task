import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import AddUser from '../../component/add-user/addUser';
import Navbar from '../../component/navbar/navbar';
import './home.css'

export default function Home() {
const [searchValue, setSearchValue] = useState('');
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


    function onSearch(searchedValue) {
        setSearchValue(searchedValue);
        console.log(searchedValue.length);
        if (searchedValue.length != 0) {
            const searchArray = item.filter((data)=> (data.product).toLowerCase().includes(searchedValue));
            setItem(searchArray);
        } else {
            setItem(demolist);
        }
       
    }



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
                        <div className="row p-0 justify-content-between mb-3">
                            <div className="col-md-6">
                                <form class="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchValue} onChange={(e)=> onSearch(e.target.value)}/>
                                </form>
                            </div>
                            <div className="col-md-3 mt-lg-0 mt-3">
                                <div className='add-wrapper'>
                                    <AddUser handleData={(data) => onUserAdd(data)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <table class="table shadow rounded border mt-2">
                            <thead className='table-dark'>
                                <tr>
                                    <th scope="col" className='text-center'>Product name</th>
                                    <th scope="col" className='text-center'>Price</th>
                                    <th scope="col" className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='table-secondary'>
                                {item.map((data, index) => {
                                    return <tr>
                                        <td className='text-center'>{data.product}</td>
                                        <td className='text-center'>{data.price}</td>
                                        <td><i class="fa-solid fa-trash-can delete delete-icon" onClick={() => { onDelete(index) }}></i></td>
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
