
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ViewCards = () => {


    const navigate = useNavigate();

    const [selectedProducts, setSelectedProducts] = useState([]);


    const handleEventCall = (e) => {
        e.preventDefault();
        const targetedValue = e.currentTarget.value;
        console.log(targetedValue);
        if (targetedValue.length === 0) {
            console.log("no data");
            return;
        }


        axios.get("http://localhost:3060/product")
            .then((res) => {
                const AllProducts = res.data;
                if (AllProducts.length === 0) {
                    console.log("no data");
                    return;
                }
                const matchedData = AllProducts.filter(product => product.category === targetedValue);
                if (matchedData.length > 0) {
                    setSelectedProducts(matchedData);
                    const routeMap = {
                        "Cloths": "/ClothPage",
                        "Laptop": "/LaptopPage",
                        "MakupKits": "/MakeupKitsPage",
                        "Shoes": "/ShoesPage",
                        "KitchenItem": "/Kitchens",
                        "Toys": "/Toyes"
                    };
                    const route = routeMap[targetedValue];
                    console.log(targetedValue);
                    if (route) {
                        navigate(route, { state: { products: matchedData } });
                    }
                } else {
                    console.log("no data");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <div className="row row-cols-1 row-cols-md-3">
                <button className='btn btn-light'>
                    <h4 className='fw-bold text-center'> <i class="bi bi-truck text-warning"></i> Free Shipping</h4>
                    <p className='text-center my-1'>Lorem ipsum dolor sit, amet consectetur</p>
                    <p className='text-center my-1'>Lorem, ipsum dolor.</p>
                </button>
                <button className='btn btn-light'>
                    <h4 className='fw-bold text-center'> <i class="bi bi-box-seam text-warning"></i> 30 Days Return</h4>
                    <p className='text-center my-1'>Lorem ipsum dolor sit, amet consectetur</p>
                    <p className='text-center my-1'>Lorem, ipsum dolor.</p>
                </button>
                <button className='btn btn-light'>
                    <h4 className='fw-bold text-center'> <i class="bi bi-cash-coin text-warning"></i> 100% Payment Secure</h4>
                    <p className='text-center my-1'>Lorem ipsum dolor sit, amet consectetur</p>
                    <p className='text-center my-1'>Lorem, ipsum dolor.</p>
                </button>
            </div>
            <div className="container my-4">


                <h1 className="fw-bold text-primary text-center my-2">Our Featured Products</h1>
            </div>
            <div className="container my-4">
                <div class="row row-cols-1 row-cols-md-3 g-4 ">
                    <button className="btn btn-outline-light" value={'Cloths'} onClick={handleEventCall}>
                        <div className="col">
                            <div class="card text-bg-dark">
                                <img src="https://images.unsplash.com/photo-1652249418530-f5efa38f9d06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2lvbiUyMGNsb3Roc3xlbnwwfHwwfHx8MA%3D%3D" class="card-img" alt="..." style={{ opacity: 0.4 }} />
                                <div class="card-img-overlay d-flex flex-column mt-4">
                                    <h4 class="card-title text-center text-bold mt-auto fw-bold">Trending Fashions on wear</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at nisi provident!</p>
                                    {/* <p class="card-text mt-auto"><small>Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                        </div>
                    </button>
                    <button className="btn btn-outline-light" value={"MakupKits"} onClick={handleEventCall}>
                        <div className="col">
                            <div class="card text-bg-dark">
                                <img src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFrZSUyMHVwfGVufDB8fDB8fHww" class="card-img" alt="..." style={{ opacity: 0.4 }} />
                                <div class="card-img-overlay d-flex flex-column mt-4">
                                    <h4 class="card-title text-center mt-auto fw-bold">MakeupKites</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at nisi provident!</p>
                                    {/* <p class="card-text mt-auto"><small>Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                        </div>
                    </button>
                    <button className="btn btn-outline-light" value={"Shoes"} onClick={handleEventCall}>
                        <div className="col">
                            <div class="card text-bg-dark">
                                <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fHww" class="card-img" alt="..." style={{ opacity: 0.4 }} />
                                <div class="card-img-overlay d-flex flex-column mt-4">
                                    <h4 class="card-title text-center mt-auto fw-bold">Sports shoes</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at nisi provident!</p>
                                    {/* <p class="card-text mt-auto"><small>Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                        </div>
                    </button>
                    <button className="btn btn-outline-light" value={"KitchenItem"} onClick={handleEventCall}>
                        <div className="col">
                            <div class="card text-bg-dark">
                                <img src="https://images.unsplash.com/photo-1588796460718-f457ad1e1a1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2l0Y2hlbiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D" class="card-img" alt="..." style={{ opacity: 0.4 }} />
                                <div class="card-img-overlay d-flex flex-column mt-4">
                                    <h4 class="card-title text-center mt-auto fw-bold">Kithens Accessories</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at nisi provident!</p>
                                    {/* <p class="card-text mt-auto"><small>Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                        </div>
                    </button>
                    <button className="btn btn-outline-light" value={"Laptop"} onClick={handleEventCall}>
                        <div className="col">
                            <div class="card text-bg-dark">
                                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wfGVufDB8fDB8fHww" class="card-img" alt="..." style={{ opacity: 0.4 }} />
                                <div class="card-img-overlay d-flex flex-column mt-4">
                                    <h4 class="card-title text-center mt-auto fw-bold">Laptops upto 50%OFF</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at nisi provident!</p>
                                    {/* <p class="card-text mt-auto"><small>Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                        </div>
                    </button>
                    <button className="btn btn-outline-light" value={"Toys"} onClick={handleEventCall}>
                        <div className="col">
                            <div class="card text-bg-dark">
                                <img src="https://images.unsplash.com/photo-1599623560574-39d485900c95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRveWVzfGVufDB8fDB8fHww" class="card-img" alt="..." style={{ opacity: 0.4 }} />
                                <div class="card-img-overlay d-flex flex-column mt-4">
                                    <h4 class="card-title text-center mt-auto fw-bold">Toyes</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at nisi provident!</p>
                                    {/* <p class="card-text mt-auto"><small>Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                        </div>
                    </button>

                </div>
            </div>




            <footer class="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
                <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary"></div>
                <div className="row">
                    <div class="col-lg-3 mb-3">
                        <a href="" className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none">
                            <span class="fs-5">TechNest</span>
                        </a>
                        <ul className="list-unstyled small">
                            <li className="mb-2">Designed and built with all the love in the world by
                                <a href="https://www.linkedin.com/in/abhinav-kumar-b886ab225/">Abhinav kumar </a>
                                with the help of
                            </li>
                            <li className="mb-2">Reactjs</li>
                            <li className="mb-2">Bootstrap</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default ViewCards;