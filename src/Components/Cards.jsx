


import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// import Navbar from '../Components/Navbar'
import UserNavbar from "./UserNavbar";






function formatNumberToIndianCurrency(number) {

    const x = number.toString().split('.');
    const wholePart = x[0];
    const decimalPart = x.length > 1 ? `.${x[1]}` : '';
    const lastThree = wholePart.substring(wholePart.length - 3);
    const otherNumbers = wholePart.substring(0, wholePart.length - 3);
    const formattedNumber = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
    return otherNumbers !== '' ? formattedNumber + ',' + lastThree + decimalPart : lastThree + decimalPart;
}
const Cards = () => {
    const [data, setData] = useState([]); // Correctly destructure the state and setter

    const navigate = useNavigate();
    const param = useParams();
    
    // const [alert, setAlert] = useState(null); // state for alert message


    useEffect(() => {
        axios.get("http://localhost:4040/CardItem")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                alert("Some issue!");
            });
    });


    const RemoveFromCard = (id, product) => {


        // alert("removed")
        axios.delete(`http://localhost:4040/CardItem/${id}`)
            .then((res) => {
                // alert(product + " Removed");
                return(
                    <div class="alert alert-primary" role="alert">
                        {product} + Removed Successfully
</div>

                )
                // setForce(!force);
            })
            .catch((error) => {
                alert("Data not found!")
            });
    };


    // const BuyProduct = (id) => {
    //     axios.get(`http://localhost:3060/product/${id}`)
    //         .then((res) => {
    //             alert( " Ordered Successfully");
    //             // setForce(!force);
    //             navigate(`/buy/${id}`);
    //         })
    //         .catch((err) => {
    //             alert("Data not Found");
    //         });
    // };
    

    const BuyProduct = (id) => {
        axios.get(`http://localhost:3060/product/${id}`)
            .then((res) => {
                // setAlert({ message: "Ordered Successfully", type: "primary" });
                alert("buy")
                navigate(`/buy/${id}`);
            })
            .catch((err) => {
                // setAlert({ message: "Data not Found", type: "danger" });
                alert(err)
            });
    };


    const formatDescription = (description) => {
        const words = description.split(" ");
        if (words.length >= 25) {
            return words.slice(0, 10).join(" ") + " ...";
        }
        return description;
    };

      
    function formatNumberToIndianCurrency(number) {
        const x = number.toString().split('.');
        const wholePart = x[0];
        const decimalPart = x.length > 1 ? `.${x[1]}` : '';
        const lastThree = wholePart.substring(wholePart.length - 3);
        const otherNumbers = wholePart.substring(0, wholePart.length - 3);
        const formattedNumber = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
        return otherNumbers !== '' ? formattedNumber + ',' + lastThree + decimalPart : lastThree + decimalPart;
    }

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <>
                {[...Array(fullStars)].map((_, index) => (
                    <i key={`full-${index}`} className="bi bi-star-fill text-warning"></i>
                ))}
                {halfStar && <i className="bi bi-star-half text-warning"></i>}
                {[...Array(emptyStars)].map((_, index) => (
                    <i key={`empty-${index}`} className="bi bi-star text-warning"></i>
                ))}
            </>
        );
    };

    return (
        <>

        {<UserNavbar/>}
       
            {data.map((x) => {
                const discountedPrice = (x.price - (x.price * (x.offer / 100))).toFixed(2);

                return (
                    <div key={x.id} className="container text-center">
                        

                        {/* <div class="clearfix border">
                            <img src={x.image} class="col-md-6 float-md-end mb-3 ms-md-3" alt="..." />

                            <h1>{x.product}</h1>

                            <p className="card-text">{x.description}</p>

                            <span className="text-muted text-decoration-line-through">
                                ₹{formatNumberToIndianCurrency(x.price)}
                            </span>

                            <span className="text-success">₹{formatNumberToIndianCurrency(discountedPrice)}</span> {' '}
                            <span className="badge bg-warning">{x.offer}% OFF</span>

                           <div className="container mt-2">
                           <button className="btn btn-outline-success me-2" onClick={() => BuyProduct(x.id)}>
                                <i className="bi bi-currency-rupee"></i> Buy
                            </button>
                            <button onClick={() => RemoveFromCard(x.id, x.name)} className="btn btn-outline-danger">
                                <i className="bi bi-trash3"></i> Remove
                            </button>
                           </div>

                        </div> */}


<div class="card mb-3" style={{maxWidth:" 540px "}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={x.image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title fw-bold">{x.product}</h5>
        <p class="card-text">{formatDescription(x.description)}</p>
        <p class="card-text"><span>{x.ratting}</span> {renderStars(x.ratting)}</p>
        <span class="card-text text-muted text-decoration-line-through">₹{formatNumberToIndianCurrency(x.price)}</span>  {' '}
        <span className="text-success">₹{formatNumberToIndianCurrency(discountedPrice)}</span> {' '}
        {/* <span className="badge bg-warning">{x.offer}% OFF</span> */}


        <div className="container mt-2">
                           <button className="btn btn-outline-success me-2" onClick={() => BuyProduct(x.id)}>
                                <i className="bi bi-currency-rupee"></i> Buy
                            </button>
                            <button onClick={() => RemoveFromCard(x.id, x.name)} className="btn btn-outline-danger">
                                <i className="bi bi-trash3"></i> Remove
                            </button>
        </div>

      </div>
    </div>
  </div>
</div>




                    </div>

                   
                );
            })}
        </>
    );
}

export default Cards;
