







// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from './Navbar';

// const AdminPage = () => {
//     const [data, setData] = useState([]);
//     const [force, setForce] = useState(true);

//     const navigate = useNavigate();
//     const param = useParams();

//     const location = useLocation();
//     const { user } = location.state || {};

//     useEffect(() => {
//         axios.get("http://localhost:3060/product")
//             .then((res) => {
//                 setData(res.data);
//             })
//             .catch((err) => {
//                 alert("Some issue!");
//             });
//     }, [force]);

//     const editPage = (id) => {
//         navigate(`/edit/${id}`);
//     };

//     const removeDish = (id, product) => {
//         axios.delete(`http://localhost:3060/product/${id}`)
//             .then((res) => {
//                 alert(product + " Removed Successfully");
//                 setForce(!force);
//             })
//             .catch((err) => {
//                 alert("Data not Found");
//             });
//     };

//     const formatDescription = (description) => {
//         const words = description.split(" ");
//         if (words.length >= 25) {
//             return words.slice(0, 10).join(" ") + " ...";
//         }
//         return description;
//     };

//     return (
//         <>
//             <Navbar user={user} />
//             <div className="container">
//                 <div className="row">
//                     {data.map((x) => {
//                         const discountedPrice = (x.price - (x.price * (x.offer / 100))).toFixed(2);

//                         return (
//                             <div className="col-md-4 mb-4" key={x.id}>
//                                 <div className="card h-100">
//                                     <img src={x.image} className="card-img-top" alt={x.product} style={{ height: 240 }} />
//                                     <div className="card-body">
//                                         <h5 className="card-title">{x.product}</h5>
//                                         <p className="card-text">{formatDescription(x.description)}</p>
//                                         <p className="card-text">
//                                             <span className="text-muted text-decoration-line-through">₹{x.price}</span> {' '}
//                                             <span className="text-success">₹{discountedPrice}</span> {' '}
//                                             <span className="badge bg-warning">{x.offer}% OFF</span>
//                                         </p>
//                                         <button className="btn btn-primary me-2" onClick={() => editPage(x.id)}>
//                                             <i className="bi bi-pencil-square"></i> Edit
//                                         </button>
//                                         <button onClick={() => removeDish(x.id, x.product)} className="btn btn-danger">
//                                             <i className="bi bi-trash"></i> Delete
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AdminPage;



import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import ReactPaginate from 'react-paginate';

const AdminPage = () => {
    const [data, setData] = useState([]);
    const [force, setForce] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;

    const navigate = useNavigate();
    const param = useParams();

    const location = useLocation();
    const { user } = location.state || {};

    useEffect(() => {
        axios.get("http://localhost:3060/product")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                alert("Some issue!");
            });
    }, [force]);

    const editPage = (id) => {
        navigate(`/edit/${id}`);
    };

    const removeDish = (id, product) => {
        axios.delete(`http://localhost:3060/product/${id}`)
            .then((res) => {
                alert(product + " Removed Successfully");
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

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentPageData = data.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    return (
        <>
            <Navbar user={user} />
            <div className="container">
                <div className="row">
                    {currentPageData.map((x) => {
                        const discountedPrice = (x.price - (x.price * (x.offer / 100))).toFixed(2);

                        return (
                            <div className="col-md-4 mb-4" key={x.id}>
                                <div className="card h-100">
                                    <img src={x.image} className="card-img-top" alt={x.product} style={{ height: 240 }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{x.product}</h5>
                                        <p className="card-text">{formatDescription(x.description)}</p>
                                        <p className="card-text">
                                            <span className="text-muted text-decoration-line-through">₹{x.price}</span> {' '}
                                            <span className="text-success">₹{discountedPrice}</span> {' '}
                                            <span className="badge bg-warning">{x.offer}% OFF</span>
                                        </p>
                                        <button className="btn btn-primary me-2" onClick={() => editPage(x.id)}>
                                            <i className="bi bi-pencil-square"></i> Edit
                                        </button>
                                        <button onClick={() => removeDish(x.id, x.product)} className="btn btn-danger">
                                            <i className="bi bi-trash"></i> Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="d-flex justify-content-center">
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        activeClassName={"active"}
                    />
                </div>
            </div>
        </>
    );
};

export default AdminPage;
