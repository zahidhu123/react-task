import React, { useState } from 'react';
import './addUser.css'

export default function AddUser(props) {

    const [product, setProduct] = useState();
    const [price, setPrice] = useState();
    

    return (
        <div>
            <button type="button" className="btn btn-create" data-bs-toggle="modal" data-bs-target="#exampleModalCreate" data-bs-whatever="@mdo">Add</button>

            <div className="modal fade" id="exampleModalCreate" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header header-wrapper">
                            <h5 className="modal-title" id="exampleModalLabel">Add user</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label for="validationDefault03" class="form-label mb-1">Product name</label>
                                    <input type="text" value={product}
                                        onChange={e => setProduct(e.target.value)}
                                        class="form-control" id="validationDefault03" placeholder='Enter your name' required />
                                </div>
                                <div className="mb-3">
                                    <label for="validationDefault03" class="form-label mb-1">Price</label>
                                    <input type="number" value={price}
                                        onChange={e => setPrice(e.target.value)}
                                        class="form-control" id="validationDefault03" placeholder='Enter last name' required />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer header-wrapper mb-3">
                            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn btn-primary" onClick={() => props.handleData({
                                product: product,
                                price: price,
                            })}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
