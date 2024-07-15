// 1.

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from 'axios';

// const BuyProduct = () => {
//     const [product, setProduct] = useState('');
//     const [img, setImg] = useState('');
//     const [price, setPrice] = useState('');
//     const [offer,setOffer]=useState('');



//     const params = useParams();

//     function formatNumberToIndianCurrency(number) {
//         const x = number.toString().split('.');
//         const wholePart = x[0];
//         const decimalPart = x.length > 1 ? `.${x[1]}` : '';
//         const lastThree = wholePart.substring(wholePart.length - 3);
//         const otherNumbers = wholePart.substring(0, wholePart.length - 3);
//         const formattedNumber = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
//         return otherNumbers !== '' ? formattedNumber + ',' + lastThree + decimalPart : lastThree + decimalPart;
//     }


//     useEffect(() => {
//         axios.get(`http://localhost:3060/product/${params.id}`)
//             .then((res) => {
//                 setProduct(res.data.product);
//                 setImg(res.data.image);
//                 setPrice(res.data.price);
//                 setOffer(res.data.offer);
//                 // alert("Fetched!");
//             })
//             .catch((error) => {
//                 alert(error.message);
//             });
//     }, [params.id]);

//     const discountedPrice = (price - (price * (offer / 100))).toFixed(2);

//     return (
//         <div className="container mt-4 w-5">


//             <div className="form-control form-control-sm"
//                 id="exampleFormControlInput1"
//                 placeholder="name@example.com"
//                 style={{ border: "none", borderBottom: "0.5px solid gray", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                 <div>Total</div>
//                 <div> ₹{formatNumberToIndianCurrency(discountedPrice)}</div>
//                 <div>{product}</div>
//                 <img src={img} alt="..." style={{width:"160px", height:"160px"}} />
                
//             </div>






//             <form class="row g-3 mt-4">
//                 <div class="col-md-6">
//                     <label for="inputEmail4" class="form-label">Email</label>
//                     <input type="email" class="form-control" id="inputEmail4" />
//                 </div>
//                 <div class="col-md-6">
//                     <label for="inputPassword4" class="form-label">Password</label>
//                     <input type="password" class="form-control" id="inputPassword4" />
//                 </div>
//                 <div class="col-12">
//                     <label for="inputAddress" class="form-label">Address</label>
//                     <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
//                 </div>
//                 <div class="col-12">
//                     <label for="inputAddress2" class="form-label">Address 2</label>
//                     <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
//                 </div>
//                 <div class="col-md-6">
//                     <label for="inputCity" class="form-label">City</label>
//                     <input type="text" class="form-control" id="inputCity" />
//                 </div>
//                 <div class="col-md-4">
//                     <label for="inputState" class="form-label">State</label>
//                     <select id="inputState" class="form-select">
//                         <option selected>Choose...</option>
//                         <option>...</option>
//                     </select>
//                 </div>
//                 <div class="col-md-2">
//                     <label for="inputZip" class="form-label">Pin</label>
//                     <input type="text" class="form-control" id="inputZip" />
//                 </div>

//                 <div className="clearfix">
//                     <img
//                         src="https://t4.ftcdn.net/jpg/04/19/95/85/360_F_419958510_5RWBOEdL8zk7f4YNv7jnpsnnY2yEbekX.jpg"
//                         className="col-md-6 float-md-end mb-3 ms-md-3"
//                         alt="..."
//                         style={{ maxWidth: "100%", height: "auto" }}
//                     />

//                     <div className="d-flex align-items-center">
//                         <label htmlFor="inputState" className="form-label mb-0 me-2">Payment Options:</label>
//                         <select id="inputState" className="form-select w-auto">
//                             <option selected>Choose...</option>
//                             <option>Paytm</option>
//                             <option>Gpay</option>
//                             <option>AmazonePay</option>
//                             <option>PhonePay</option>
//                             <option>CreditCard</option>

//                         </select>
//                     </div>
//                 </div>


//                 <div class="col-12">
//                     <button type="submit" class="btn btn-success container">Pay</button>
//                 </div>
//             </form>


//         </div>
//     );
// }

// export default BuyProduct;




// 2

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const BuyProduct = () => {
    const [product, setProduct] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('');
    const [offer, setOffer] = useState('');
    const [user, setUser] = useState(null); // State to keep track of logged-in user

    const params = useParams();

    function formatNumberToIndianCurrency(number) {
        const x = number.toString().split('.');
        const wholePart = x[0];
        const decimalPart = x.length > 1 ? `.${x[1]}` : '';
        const lastThree = wholePart.substring(wholePart.length - 3);
        const otherNumbers = wholePart.substring(0, wholePart.length - 3);
        const formattedNumber = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
        return otherNumbers !== '' ? formattedNumber + ',' + lastThree + decimalPart : lastThree + decimalPart;
    }

    useEffect(() => {
        // Fetch product details
        axios.get(`http://localhost:3060/product/${params.id}`)
            .then((res) => {
                setProduct(res.data.product);
                setImg(res.data.image);
                setPrice(res.data.price);
                setOffer(res.data.offer);
            })
            .catch((error) => {
                alert(error.message);
            });

        // Check if user is logged in
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, [params.id]);

    const discountedPrice = (price - (price * (offer / 100))).toFixed(2);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user) {
            alert("Please login to proceed with the purchase.");
        } else {
            // Submit form
        }
    };

    return (
        <div className="container mt-4 w-5">
            <div className="form-control form-control-sm"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                style={{ border: "none", borderBottom: "0.5px solid gray", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>Total</div>
                <div> ₹{formatNumberToIndianCurrency(discountedPrice)}</div>
                <div>{product}</div>
                <img src={img} alt="..." style={{ width: "160px", height: "160px" }} />
            </div>

            <form className="row g-3 mt-4" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" value={user ? user.email : ''} readOnly />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Contact Number</label>
                    <input type="number" className="form-control" id="inputPassword4" value={user ? user.contact : ''} readOnly />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Pin</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>

                <div className="clearfix">
                    <img
                        src="https://t4.ftcdn.net/jpg/04/19/95/85/360_F_419958510_5RWBOEdL8zk7f4YNv7jnpsnnY2yEbekX.jpg"
                        className="col-md-6 float-md-end mb-3 ms-md-3"
                        alt="..."
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <div className="d-flex align-items-center">
                        <label htmlFor="inputState" className="form-label mb-0 me-2">Payment Options:</label>
                        <select id="inputState" className="form-select w-auto">
                            <option selected>Choose...</option>
                            <option>Paytm</option>
                            <option>Gpay</option>
                            <option>AmazonePay</option>
                            <option>PhonePay</option>
                            <option>CreditCard</option>
                        </select>
                    </div>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-success container">Pay</button>
                </div>
            </form>
        </div>
    );
}

export default BuyProduct;
