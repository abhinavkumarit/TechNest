import img1 from '../ToyesImg/ToyesImg1.webp';
import img2 from '../ToyesImg/ToyesImg2.webp';
import img3 from '../ToyesImg/ToyesImg3.webp';
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';


const ToyesPage = () => {


    const [force, setForce] = useState(true);

    const navigate = useNavigate();

    const location = useLocation();
    const { products, msg } = location.state;
    console.log(msg);
    // console.log(products);

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





    return ( 
        <>
                <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">TechNest</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/user">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/cards"><i class="bi bi-cart4"></i>card</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link disabled" style={{ cursor: "pointer" }} aria-disabled="true">About</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>


            </div>


            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {[
                        {
                            img: img1, alt: 'img2', content: (
                                <div class="content">
                                    <div class="content1 ">
                                        {/* <h3 class="ttext">50% off Great summer sale</h3>
                                        <h1>Unleash Your Street Style with Our new Collection</h1>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptatem veniam maxime.</p>
                                        <button class="btn btn-danger" value={50} onClick={handleEventCall}>Buy now</button> */}
                                    </div>
                                </div>
                            )
                        },
                        {
                            img: img2, alt: 'img4', content: (
                                <div class="content">
                                    <div class="content1 ">
                                        {/* <h1 class="ttext" style={{ color: 'red' }}>Sales 20% OFF</h1>
                                        <h1 style={{}}>On Everything</h1>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptatem veniam maxime.</p>
                                        <button class="btn btn-danger" value={20} onClick={handleEventCall}>Buy now</button> */}
                                    </div>

                                </div>
                            )
                        },
                        {
                            img: img3, alt: 'img6', content: (
                                <div class="content">
                                    <div class="content1 ">
                                        {/* <h1 class="ttext" style={{ color: '' }}>Get The Best Products</h1>
                                        <h1 style={{}}>From Our Stores</h1>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptatem veniam maxime.</p>
                                        <button class="btn btn-danger" value={4.0} onClick={handleEventCallRatting} >Buy now</button> */}
                                    </div>

                                </div>
                            )
                        }
                    ].map((image, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <div
                                style={{
                                    position: 'relative',
                                    // padding-top:
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




            <div className="container my-4">
                <h1 className='text-center text-primary fw-bold'>Shoes New Arrivals</h1>
            </div>

          
            <div className="container">
                <div className="row">
                    {products.map((x) => {
                        const discountedPrice = (x.price - (x.price * (x.offer / 100))).toFixed(2);

                        return (
                            <div className="col-md-4 mb-4" key={x.id}>
                                <div className="card h-100">
                                    <img src={x.image} className="card-img-top" alt={x.product} style={{ height: "14em" }} />
                                    <div className="card-body">
                                        <h5 className="card-title text-bg fw-bold">{x.product}</h5>
                                        <p className="card-text">{formatDescription(x.description)}</p>
                                        <p class="card-text"><span>{x.ratting}</span> {renderStars(x.ratting)}</p>

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
                        );
                    })}
                </div>
            </div>
        </>
     );
}
 
export default ToyesPage;