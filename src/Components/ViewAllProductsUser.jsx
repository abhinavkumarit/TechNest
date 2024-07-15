
// import img2 from '../images/img2.webp';
// import img4 from '../images/img4.webp';
// import img6 from '../images/img6.webp';
// // import img7 from '../images/img7.jpeg';
// import img8 from '../images/img8.webp';
// // import img9 from '../images/img9.jpeg';
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const ViewAllProducts = () => {

//     const [data, setData] = useState([]);
//     const [force, setForce] = useState(true);

//     const navigate = useNavigate();
//     const param = useParams();

//     function formatNumberToIndianCurrency(number) {
//         const x = number.toString().split('.');
//         const wholePart = x[0];
//         const decimalPart = x.length > 1 ? `.${x[1]}` : '';
//         const lastThree = wholePart.substring(wholePart.length - 3);
//         const otherNumbers = wholePart.substring(0, wholePart.length - 3);
//         const formattedNumber = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
//         return otherNumbers !== '' ? formattedNumber + ',' + lastThree + decimalPart : lastThree + decimalPart;
//     }

//     const BuyProduct = (id) => {
//         axios.get(`http://localhost:3060/product/${id}`)
//             .then((res) => {
//                 alert("Ordered Successfully");
//                 navigate(`/buy/${id}`);
//             })
//             .catch((err) => {
//                 alert("Data not Found");
//             });
//     };

//     const AddToCard = (product) => {
//         axios.post(`http://localhost:4040/CardItem`, product)
//             .then((res) => {
//                 alert(product.product + " Added Successfully");
//                 alert(product.name + " Added Successfully");
//                 setForce(!force);
//             })
//             .catch((err) => {
//                 alert("Data not Found");
//             });
//     };

//     useEffect(() => {
//         axios.get("http://localhost:3060/product")
//             .then((res) => {
//                 setData(res.data);
//             })
//             .catch((err) => {
//                 alert("Some issue!");
//             });
//     }, [force]);

//     const formatDescription = (description) => {
//         const words = description.split(" ");
//         if (words.length >= 25) {
//             return words.slice(0, 10).join(" ") + " ...";
//         }
//         return description;
//     };

//     return (
//         <>
//             <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
//                 <div className="carousel-inner">
//                     {[
//                         { img: img2, alt: 'img2', text: 'Welcome to Our Store' },
//                         { img: img4, alt: 'img4', text: 'Best Deals on Electronics' },
//                         { img: img6, alt: 'img6', text: 'New Arrivals' },
//                         // { img: img7, alt: 'img7', text: 'Exclusive Offers' },
//                         { img: img8, alt: 'img8', text: 'Shop Now' }
//                         // { img: img9, alt: 'img9', text: 'Limited Time Offers' }
//                     ].map((image, index) => (
//                         <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
//                             <div
//                                 style={{
//                                     position: 'relative',
//                                     width: '100vw',
//                                     height: 'auto'
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         position: 'absolute',
//                                         top: 0,
//                                         left: 0,
//                                         width: '100%',
//                                         height: '100%',
//                                         background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
//                                         zIndex: 1
//                                     }}
//                                 ></div>
//                                 <img
//                                     src={image.img}
//                                     className="d-block w-100"
//                                     alt={image.alt}
//                                     style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
//                                 />
//                                 <div
//                                     style={{
//                                         position: 'absolute',
//                                         top: '50%',
//                                         left: '50%',
//                                         transform: 'translate(-50%, -50%)',
//                                         color: 'white',
//                                         zIndex: 2,
//                                         textAlign: 'center',
//                                         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                                         padding: '10px 20px',
//                                         borderRadius: '5px'
//                                     }}
//                                 >
//                                     <h2>{image.text}</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className='w-100 border' style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))'}}>
//                 <div className="container">
//                     <div className="row">
//                         {data.map((x) => {
//                             const discountedPrice = (x.price - (x.price * (x.offer / 100))).toFixed(2);

//                             return (
//                                 <div className="col-md-4 mb-4" key={x.id} style={{boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}}>
//                                     <div className="card h-100">
//                                         <img src={x.image} className="card-img-top mt-4" alt={x.product} style={{ height: 240 }} />
//                                         <div className="card-body">
//                                             <h5 className="card-title">{x.product}</h5>
//                                             <p className="card-text">{formatDescription(x.description)}</p>
//                                             <p className="card-text">
//                                                 <span className="text-muted text-decoration-line-through">₹{formatNumberToIndianCurrency(x.price)}</span> {' '}
//                                                 <span className="text-success">₹{formatNumberToIndianCurrency(discountedPrice)}</span> {' '}
//                                                 <span className="badge bg-warning">{x.offer}% OFF</span>
//                                             </p>
//                                             <button className="btn btn-outline-success me-2" onClick={() => BuyProduct(x.id)}>
//                                                 <i className="bi bi-currency-rupee"></i> Buy
//                                             </button>

//                                             <button onClick={() => AddToCard(x)} className="btn btn-outline-primary">
//                                                 <i className="bi bi-cart4"></i> Card
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default ViewAllProducts;






// import img1 from '../images/boho-earrings.jpg';
// import img2 from '../images/digital-download-music.jpg';
// import img3 from '../images/modern-time-pieces.jpg';
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const ViewAllProducts = () => {

//     const [data, setData] = useState([]);
//     const [force, setForce] = useState(true);

//     const navigate = useNavigate();
//     const param = useParams();

//     function formatNumberToIndianCurrency(number) {
//         const x = number.toString().split('.');
//         const wholePart = x[0];
//         const decimalPart = x.length > 1 ? `.${x[1]}` : '';
//         const lastThree = wholePart.substring(wholePart.length - 3);
//         const otherNumbers = wholePart.substring(0, wholePart.length - 3);
//         const formattedNumber = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
//         return otherNumbers !== '' ? formattedNumber + ',' + lastThree + decimalPart : lastThree + decimalPart;
//     }

//     const BuyProduct = (id) => {
//         axios.get(`http://localhost:3060/product/${id}`)
//             .then((res) => {
//                 alert("Ordered Successfully");
//                 navigate(`/buy/${id}`);
//             })
//             .catch((err) => {
//                 alert("Data not Found");
//             });
//     };

//     const AddToCard = (product) => {
//         axios.post(`http://localhost:4040/CardItem`, product)
//             .then((res) => {
//                 alert(product.product + " Added Successfully");
//                 alert(product.name + " Added Successfully");
//                 setForce(!force);
//             })
//             .catch((err) => {
//                 alert("Data not Found");
//             });
//     };

//     useEffect(() => {
//         axios.get("http://localhost:3060/product")
//             .then((res) => {
//                 setData(res.data);
//             })
//             .catch((err) => {
//                 alert("Some issue!");
//             });
//     }, [force]);

//     const formatDescription = (description) => {
//         const words = description.split(" ");
//         if (words.length >= 25) {
//             return words.slice(0, 10).join(" ") + " ...";
//         }
//         return description;
//     };

//     return (
//         <>
//             <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
//                 <div className="carousel-inner">
//                     {[
//                         { img: img1, alt: 'img2', text: 'Welcome to Our Store' },
//                         { img: img2, alt: 'img4', text: 'Best Deals on Electronics' },
//                         { img: img3, alt: 'img6', text: 'New Arrivals' }
//                         // { img: img8, alt: 'img8', text: 'Shop Now' }
//                     ].map((image, index) => (
//                         <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
//                             <div
//                                 style={{
//                                     position: 'relative',
//                                     width: '100%',
//                                     height: '60vh' // Set height to 60% of the viewport height
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         position: 'absolute',
//                                         top: 0,
//                                         left: 0,
//                                         width: '100%',
//                                         height: '100%',
//                                         background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
//                                         zIndex: 1
//                                     }}
//                                 ></div>
//                                 <img
//                                     src={image.img}
//                                     className="d-block w-100"
//                                     alt={image.alt}
//                                     style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
//                                 />
//                                 <div
//                                     style={{
//                                         position: 'absolute',
//                                         top: '50%',
//                                         left: '50%',
//                                         transform: 'translate(-50%, -50%)',
//                                         color: 'white',
//                                         zIndex: 2,
//                                         padding: '10px 20px',
//                                         borderRadius: '5px'
//                                     }}
//                                 >
//                                     <h2>{image.text}</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className='w-100 border' >
//                 <div className="container">
//                     <div className="row">
//                         {data.map((x) => {
//                             const discountedPrice = (x.price - (x.price * (x.offer / 100))).toFixed(2);

//                             return (
//                                 <div className="col-md-4 mb-4" key={x.id} style={{boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}}>
//                                     <div className="card h-100 border-0">
//                                         {/* {x.category} */}
//                                         <img src={x.image} className="card-img-top mt-4" alt={x.product} style={{ height: 240 }} />
//                                         <div className="card-body">
//                                             <h5 className="card-title">{x.product}</h5>
//                                             <p className="card-text">{formatDescription(x.description)}</p>
//                                             <p className="card-text">
//                                                 <p>
//                                                     <span className='badge bg-primary'>{x.ratting}</span>
//                                                 </p>
//                                                 <span className="text-muted text-decoration-line-through">₹{formatNumberToIndianCurrency(x.price)}</span> {' '}
//                                                 <span className="text-success">₹{formatNumberToIndianCurrency(discountedPrice)}</span> {' '}
//                                                 <span className="badge bg-warning">{x.offer}% OFF</span>
//                                                 {/* <span className='badge bg-warning'>{x.ratting}</span> */}
//                                             </p>
//                                             <button className="btn btn-outline-success me-2" onClick={() => BuyProduct(x.id)}>
//                                                 <i className="bi bi-currency-rupee"></i> Buy
//                                             </button>

//                                             <button onClick={() => AddToCard(x)} className="btn btn-outline-primary">
//                                                 <i className="bi bi-cart4"></i> Card
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default ViewAllProducts;



// import img1 from '../images/boho-earrings.jpg';
// import img2 from '../images/digital-download-music.jpg';
// import img3 from '../images/modern-time-pieces.jpg';
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const ViewAllProducts = ({}) => {

//     const [data, setData] = useState([]);
//     const [force, setForce] = useState(true);

//     const navigate = useNavigate();
//     const param = useParams();

//     function formatNumberToIndianCurrency(number) {
//         const x = number.toString().split('.');
//         const wholePart = x[0];
//         const decimalPart = x.length > 1 ? `.${x[1]}` : '';
//         const lastThree = wholePart.substring(wholePart.length - 3);
//         const otherNumbers = wholePart.substring(0, wholePart.length - 3);
//         const formattedNumber = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
//         return otherNumbers !== '' ? formattedNumber + ',' + lastThree + decimalPart : lastThree + decimalPart;
//     }

//     const BuyProduct = (id) => {
//         axios.get(`http://localhost:3060/product/${id}`)
//             .then((res) => {
//                 alert("Ordered Successfully");
//                 navigate(`/buy/${id}`);
//             })
//             .catch((err) => {
//                 alert("Data not Found");
//             });
//     };

//     const AddToCard = (product) => {
//         axios.post(`http://localhost:4040/CardItem`, product)
//             .then((res) => {
//                 alert(product.product + " Added Successfully");
//                 alert(product.name + " Added Successfully");
//                 setForce(!force);
//             })
//             .catch((err) => {
//                 alert("Data not Found");
//             });
//     };

//     useEffect(() => {
//         axios.get("http://localhost:3060/product")
//             .then((res) => {
//                 setData(res.data);
//             })
//             .catch((err) => {
//                 alert("Some issue!");
//             });
//     }, [force]);

//     const formatDescription = (description) => {
//         const words = description.split(" ");
//         if (words.length >= 25) {
//             return words.slice(0, 10).join(" ") + " ...";
//         }
//         return description;
//     };

//     const renderStars = (rating) => {
//         const fullStars = Math.floor(rating);
//         const halfStar = rating % 1 !== 0;
//         const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//         return (
//             <>
//                 {[...Array(fullStars)].map((_, index) => (
//                     <i key={`full-${index}`} className="bi bi-star-fill text-warning"></i>
//                 ))}
//                 {halfStar && <i className="bi bi-star-half text-warning"></i>}
//                 {[...Array(emptyStars)].map((_, index) => (
//                     <i key={`empty-${index}`} className="bi bi-star text-warning"></i>
//                 ))}
//             </>
//         );
//     };

//     return (
//         <>
//             <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
//                 <div className="carousel-inner">
//                     {[
//                         { img: img1, alt: 'img2', text: 'Welcome to Our Store' },
//                         { img: img2, alt: 'img4', text: 'Best Deals on Electronics' },
//                         { img: img3, alt: 'img6', text: 'New Arrivals' }
//                     ].map((image, index) => (
//                         <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
//                             <div
//                                 style={{
//                                     position: 'relative',
//                                     width: '100%',
//                                     height: '60vh'
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         position: 'absolute',
//                                         top: 0,
//                                         left: 0,
//                                         width: '100%',
//                                         height: '100%',
//                                         background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
//                                         zIndex: 1
//                                     }}
//                                 ></div>
//                                 <img
//                                     src={image.img}
//                                     className="d-block w-100"
//                                     alt={image.alt}
//                                     style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
//                                 />
//                                 <div
//                                     style={{
//                                         position: 'absolute',
//                                         top: '50%',
//                                         left: '50%',
//                                         transform: 'translate(-50%, -50%)',
//                                         color: 'white',
//                                         zIndex: 2,
//                                         padding: '10px 20px',
//                                         borderRadius: '5px'
//                                     }}
//                                 >
//                                     <h2>{image.text}</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className='w-100 border'>
//                 <div className="container">
//                     <div className="row">
//                         {data.map((x) => {
//                             const discountedPrice = (x.price - (x.price * (x.offer / 100))).toFixed(2);

//                             return (
//                                 <div className="col-md-4 mb-4" key={x.id} style={{boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}}>
//                                     <div className="card h-100 border-0">
//                                         <img src={x.image} className="card-img-top mt-4" alt={x.product} style={{ height: 240 }} />
//                                         <div className="card-body">
//                                             <h5 className="card-title">{x.product}</h5>
//                                             <p className="card-text">{formatDescription(x.description)}</p>
//                                             <p className="card-text">
//                                                <span>{x.ratting}</span> {renderStars(x.ratting)}
//                                             </p>
//                                             <p className="card-text">
//                                                 <span className="text-muted text-decoration-line-through">₹{formatNumberToIndianCurrency(x.price)}</span> {' '}
//                                                 <span className="text-success">₹{formatNumberToIndianCurrency(discountedPrice)}</span> {' '}
//                                                 <span className="badge bg-warning">{x.offer}% OFF</span>
//                                             </p>
//                                             <button className="btn btn-outline-success me-2" onClick={() => BuyProduct(x.id)}>
//                                                 <i className="bi bi-currency-rupee"></i> Buy
//                                             </button>

//                                             <button onClick={() => AddToCard(x)} className="btn btn-outline-primary">
//                                                 <i className="bi bi-cart4"></i> Card
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default ViewAllProducts;




import img1 from '../images/boho-earrings2.jpg';
import img2 from '../images/ecommerse2.jpg';
import img3 from '../images/newimg1.jpg';
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '../Components/Styles/viewAllUser.css'
import CoursalSlider from './CoursalSlider';
import ViewCards from './ViewCards';

const ViewAllProducts = ({ data }) => {
    const [force, setForce] = useState(true);
    // const [filteredProducts,setFilteredProducts]=useState({product: "", price: "", category: "", image: "", description: "", offer: "", ratting: "", id: "" });
    const [filteredProducts, setFilteredProducts] = useState([]);

    const navigate = useNavigate();

    // const [msg,setMsg]=useState("");

    const handleEventCallRatting=(e)=>{
        const BestRatting=e.target.value;
        // msg="Best Products And New Arrivals"
        // setMsg("Best Products And New Arrivals");
        axios.get("http://localhost:3060/product")
        .then((res)=>{
            const Products=res.data
            if(Products.length === 0){
                console.log("no data ");
                return;
            }
            const matchingData=Products.filter(product=>product.ratting >= BestRatting)
            if(matchingData.length>0){
                setFilteredProducts(matchingData)
            }
            else{
                console.log("no data");
            }

        })
        .catch((error)=>{
            console.log(error);
        })
    }

    useEffect(() => {
        if (filteredProducts.length > 0) {
            navigate('/newPage', { state: { products: filteredProducts } });
        }
    }, [filteredProducts, navigate]);

    const handleEventCall=(e)=>{
        // console.log(e.target.value);
      
        const Offerset=e.target.value;
        // if(Offerset===50){
        //     setMsg("50% OFF Great Summer Sale");
        // }
        // else if(Offerset===20){
        //     setMsg("20% OFF Every Product");
        // }
        axios.get("http://localhost:3060/product")
        .then((res)=>{
            const Products=res.data;
            if(Products.length === 0){
                console.log("No Products available");
                return;
            }
            const matchedProducts=Products.filter(product=>product.offer===Offerset)
            if(matchedProducts.length>0){
                console.log(matchedProducts);
                setFilteredProducts(matchedProducts)
               
                console.log(filteredProducts.product);

            }
            else{
                console.log("not found");
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    
    function formatNumberToIndianCurrency(number) {
        const x = number.toString().split('.');
        const wholePart = x[0];
        const decimalPart = x.length > 1 ? `.${x[1]}` : '';
        const lastThree = wholePart.substring(wholePart.length - 3);
        const otherNumbers = wholePart.substring(0, wholePart.length - 3);
        const formattedNumber = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
        return otherNumbers !== '' ? formattedNumber + ',' + lastThree + decimalPart : lastThree + decimalPart;
    }

    const BuyProduct = (id) => {
        axios.get(`http://localhost:3060/product/${id}`)
            .then((res) => {
                alert("Ordered Successfully");
                navigate(`/buy/${id}`);
            })
            .catch((err) => {
                alert("Data not Found");
            });
    };

    const AddToCard = (product) => {
        axios.post(`http://localhost:4040/CardItem`, product)
            .then((res) => {
                alert(product.product + " Added Successfully");
                alert(product.name + " Added Successfully");
                setForce(!force);
            })
            .catch((err) => {
                alert("Data not Found");
            });
    };

    const formatDescription = (description) => {
        const words = description.split(" ");
        if (words.length >= 25) {
            return words.slice(0, 10).join(" ") + " ...";
        }
        return description;
    };

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
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {[
                        {
                            img: img1, alt: 'img2', content: (
                                <div class="content w-100">
                                    <div class="content1 ">
                                        <h3 class="ttext">50% off Great summer sale</h3>
                                        <h1>Unleash Your Street Style with Our new Collection</h1>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptatem veniam maxime.</p>
                                        <button class="btn btn-danger" value={50} onClick={handleEventCall}>Buy now</button>
                                    </div>
                                </div>
                            )
                        },
                        {
                            img: img2, alt: 'img4', content: (
                                <div class="content w-100">
                                    <div class="content1 ">
                                        <h1 class="ttext" style={{ color: 'red' }}>Sales 20% OFF</h1>
                                        <h1 style={{}}>On Everything</h1>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptatem veniam maxime.</p>
                                        <button class="btn btn-danger" value={20} onClick={handleEventCall}>Buy now</button>
                                    </div>

                                </div>
                            )
                        },
                        {
                            img: img3, alt: 'img6', content: (
                                <div class="content w-100">
                                    <div class="content1 ">
                                        <h1 class="ttext" style={{ color: '' }}>Get The Best Products</h1>
                                        <h1 style={{}}>From Our Stores</h1>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptatem veniam maxime.</p>
                                        <button class="btn btn-danger" value={4.0} onClick={handleEventCallRatting} >Buy now</button>
                                    </div>

                                </div>
                            )
                        }
                    ].map((image, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <div
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '80vh'
                                }}
                            >
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
                                        zIndex: 1
                                    }}
                                ></div>
                                <img
                                    src={image.img}
                                    className="d-block w-100"
                                    alt={image.alt}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        color: 'white',
                                        zIndex: 2,
                                        padding: '10px 20px',
                                        borderRadius: '5px'
                                    }}
                                >
                                    <>{image.content}</>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* <div className='w-100 border'>
                <div className="container">
                    <div className="row">
                        {data.map((x) => {
                            const discountedPrice = (x.price - (x.price * (x.offer / 100))).toFixed(2);

                            return (
                                <>

                                    <div className="col-md-4 mb-4" key={x.id} style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                                        <div className="card h-100 border-0">
                                            <img src={x.image} className="card-img-top mt-4" alt={x.product} style={{ height: 240 }} />
                                            <div className="card-body">
                                                <h5 className="card-title">{x.product}</h5>
                                                <p className="card-text">{formatDescription(x.description)}</p>
                                                <p className="card-text">
                                                    <span>{x.ratting}</span> {renderStars(x.ratting)}
                                                </p>
                                                <p className="card-text">
                                                    <span className="text-muted text-decoration-line-through">₹{formatNumberToIndianCurrency(x.price)}</span> {' '}
                                                    <span className="text-success">₹{formatNumberToIndianCurrency(discountedPrice)}</span> {' '}
                                                    <span className="badge bg-warning">{x.offer}% OFF</span>
                                                </p>
                                                <button className="btn btn-outline-success me-2" onClick={() => BuyProduct(x.id)}>
                                                    <i className="bi bi-currency-rupee"></i> Buy
                                                </button>

                                                <button onClick={() => AddToCard(x)} className="btn btn-outline-primary">
                                                    <i className="bi bi-cart4"></i> Card
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </>

                            );
                        })}
                    </div>
                </div>
            </div> */}
            <div className="container my-2">
                <ViewCards/>
            </div>
            
            
        </>
    );
}

export default ViewAllProducts;
