// import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {

    let [product,setProduct]=useState("");
    let [price,setPrice]=useState("");
    let [offer,setOffer]=useState("");
    let [ratting,setRatting]=useState("");
    let [category,setCategory]=useState("");
    let [image,setImage]=useState("");
    let [description,setDescription]=useState("");
    let productData={product,price,category,image,offer,ratting,description};

    let navigate = useNavigate();
    
    function addProduct(event){
        event.preventDefault();
       


        axios.post("http://localhost:3060/product",productData)
        .then((res)=>{
            // console.log("Added Product");
            alert("Added successfully")
            navigate("/adminpage")
            
        })
        .catch((error)=>{
            console.log("error");
        })
    }

    return (
        <>
            <Navbar />
            <form className="container mb-6 md-4 rounded-2 border position-center mt-5 p-5"  style={{width:500}} onSubmit={addProduct}>
                <h1>Add Products</h1>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Product Name</label>
                    <input type="text" class="form-control md-4" style={{ width: 400 }} id="exampleInputEmail1" aria-describedby="emailHelp" value={product} required onChange={(e)=>{setProduct(e.target.value)}}/>
                    <div id="emailHelp" class="form-text" >We'll never share your product with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Price</label>
                    <input type="number" class="form-control " style={{ width: 400 }} id="exampleInputPassword1" required value={price} onChange={(e)=>{setPrice(e.target.value)}} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Offer</label>
                    <input type="number" class="form-control " style={{ width: 400 }} id="exampleInputNumber1" required value={offer} onChange={(e)=>{setOffer(e.target.value)}} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Ratting</label>
                    <input type="number" class="form-control " style={{ width: 400 }} id="exampleInputNumber1" required value={ratting} onChange={(e)=>{setRatting(e.target.value)}} />
                </div>
                <div class="mb-3">
                    <label for="disabledSelect" class="form-label">Category</label>
                    <select id="disabledSelect" class="form-select" style={{ width: 400 }} value={category} onChange={(e)=>setCategory(e.target.value)}>
                        <option value="Laptop">Laptop</option>
                        <option value="Computer">Computer</option>
                        <option value="Phone">Phone</option>
                        <option value="Toyes">Toyes</option>
                        <option value="TV">TV</option>
                        <option value="Headphones">HeadPhones</option>
                        <option value="KitchenItem">KitchenItems</option>
                        <option value="Shoes">Shoes</option>
                        <option value="Cloths">Cloths</option>
                        <option value="MakupKits">MakupKits</option>





                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Image url</label>
                    <input type="text" class="form-control " style={{ width: 400 }} required id="exampleInputPassword1" value={image} onChange={(e)=>{setImage(e.target.value)}} />
                </div>
                <div class="mb-3">
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 100, width: 400}} value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                        <label for="floatingTextarea2">Description</label>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary mb-4">Submit</button>
            </form>
        </>
    );
}

export default AddProducts;