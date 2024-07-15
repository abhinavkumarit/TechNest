// import axios from "axios";
// import Navbar from "./Navbar";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


// const EditingProducts = () => {
//     const [product, setProduct] = useState("");
//     const [price, setPrice] = useState("");
//     const [offer, setOffer] = useState("");
//     const [category, setCategory] = useState("");
//     const [image, setImage] = useState("");
//     const [description, setDescription] = useState("");

//     let navigate = useNavigate();

//     const param = useParams();

//     useEffect(() => {
//         axios.get(`http://localhost:3060/product/${param.id}`)
//             .then((res) => {
//                 console.log(res.data);
//                 setProduct(res.data.product);
//                 setCategory(res.data.category);
//                 // console.log(category);
//                 setDescription(res.data.description);
//                 setImage(res.data.image);
//                 setOffer(res.data.offer);
//                 setPrice(res.data.price);
//             })
//             .catch((error) => {
//                 alert("Failed to load!");
//             });
//     }, [param.id]);

    
//     const productData = { product, price, category, image, description, offer };

//     const editItem = (e) => {
//         e.preventDefault();
//         axios.put(`http://localhost:3060/product/${param.id}`, productData)
//             .then((res) => {
//                 alert("Data updated");
//                 console.log(productData.category);
//                 navigate("/adminpage");


//             })
//             .catch((error) => {
//                 alert("Failed to update!");
//             });
//     };

//     return (
//         <>
//             <Navbar />
//             <form className="container mb-6 md-4 rounded-2 border position-center mt-5 p-5" style={{ width: 500 }} onSubmit={editItem}>
//                 <h1>Edit Products Details</h1>

//                 <div className="mb-3">
//                     <label htmlFor="productName" className="form-label">Product Name</label>
//                     <input type="text" className="form-control md-4" style={{ width: 400 }} id="productName" value={product} onChange={(e) => setProduct(e.target.value)} />
//                     <div className="form-text">We'll never share your product with anyone else.</div>
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="productPrice" className="form-label">Price</label>
//                     <input type="number" className="form-control" style={{ width: 400 }} id="productPrice" value={price} onChange={(e) => setPrice(e.target.value)} />
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="productOffer" className="form-label">Offer</label>
//                     <input type="number" className="form-control" style={{ width: 400 }} id="productOffer" value={offer} onChange={(e) => setOffer(e.target.value)} />
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="productCategory" className="form-label">Category</label>
//                     <select id="productCategory" className="form-select" style={{ width: 400 }} value={category} onChange={(e) => setCategory(e.target.value)}>
//                         <option value="Laptop">Laptop</option>
//                         <option value="Computer">Computer</option>
//                         <option value="Phone">Phone</option>
//                         <option value="Toys">Toys</option>
//                         <option value="TV">TV</option>
//                     </select>
//                 </div>

//                 <div className="mb-3">
//                     <img src={image} className="card-img-top" alt="Product" style={{ height: 240 }} />
//                     <label htmlFor="productImage" className="form-label">Image URL</label>
//                     <input type="text" className="form-control" style={{ width: 400 }} id="productImage" value={image} onChange={(e) => setImage(e.target.value)} />
//                 </div>

//                 <div className="mb-3">
//                     <div className="form-floating">
//                         <textarea className="form-control" placeholder="Leave a comment here" id="productDescription" style={{ height: 100, width: 400 }} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
//                         <label htmlFor="productDescription">Description</label>
//                     </div>
//                 </div>

//                 <button type="submit" className="btn btn-primary mb-4">Submit</button>
//             </form>
//         </>
//     );
// };

// export default EditingProducts;


import axios from "axios";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditingProducts = () => {
    const [product, setProduct] = useState("");
    const [price, setPrice] = useState("");
    const [offer, setOffer] = useState("");
    const [ratting, setRatting]=useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    let navigate = useNavigate();
    const param = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3060/product/${param.id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data.product);
                setCategory(res.data.category);
                setDescription(res.data.description);
                setImage(res.data.image);
                setOffer(res.data.offer);
                setRatting(res.data.ratting);
                setPrice(res.data.price);
            })
            .catch((error) => {
                alert("Failed to load!");
            });
    }, [param.id]);

    const productData = { product, price, category, image, description, offer, ratting };

    const editItem = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3060/product/${param.id}`, productData)
            .then((res) => {
                alert("Data updated");
                navigate("/adminpage");
            })
            .catch((error) => {
                alert("Failed to update!");
            });
    };

    return (
        <>
            <Navbar />
            <form className="container mb-6 md-4 rounded-2 border position-center mt-5 p-5" style={{ width: 500 }} onSubmit={editItem}>
                <h1>Edit Products Details</h1>

                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">Product Name</label>
                    <input type="text" className="form-control md-4" style={{ width: 400 }} id="productName" value={product} onChange={(e) => setProduct(e.target.value)} />
                    <div className="form-text">We'll never share your product with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">Price</label>
                    <input type="number" className="form-control" style={{ width: 400 }} id="productPrice" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="productOffer" className="form-label">Offer</label>
                    <input type="number" className="form-control" style={{ width: 400 }} id="productOffer" value={offer} onChange={(e) => setOffer(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="productOffer" className="form-label">Ratting</label>
                    <input type="number" className="form-control" style={{ width: 400 }} id="productRatting" value={ratting} onChange={(e) => setRatting(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="productCategory" className="form-label">Category</label>
                    <select id="productCategory" className="form-select" style={{ width: 400 }} value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Laptop">Laptop</option>
                        <option value="Computer">Computer</option>
                        <option value="Phone">Phone</option>
                        <option value="Toys">Toys</option>
                        <option value="TV">TV</option>
                        <option value="Headphones">HeadPhones</option>
                        <option value="KitchenItem">KitchenItems</option>
                        <option value="Cloths">Cloths</option>

                    </select>
                </div>

                <div className="mb-3">
                    <img src={image} className="card-img-top" alt="Product" style={{ height: 240 }} />
                    <label htmlFor="productImage" className="form-label">Image URL</label>
                    <input type="text" className="form-control" style={{ width: 400 }} id="productImage" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>

                <div className="mb-3">
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="productDescription" style={{ height: 100, width: 400 }} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        <label htmlFor="productDescription">Description</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary mb-4">Submit</button>
            </form>
        </>
    );
};

export default EditingProducts;
