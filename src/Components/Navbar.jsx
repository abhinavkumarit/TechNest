
// import { useLocation } from "react-router-dom";

// const Navbar = ({user}) => {

//     const location = useLocation();
//     const { user } = location.state || {};

//     const [showProfileModal, setShowProfileModal] = useState(false);

//     const toggleProfileModal = () => {
//         setShowProfileModal(!showProfileModal);
//     };

//     return (
//         <div>
//             <nav class="navbar navbar-expand-lg bg-body-tertiary">
//                 <div class="container-fluid">
//                     <a class="navbar-brand" href="/adminpage">Acceres</a>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarNav">
//                         <ul class="navbar-nav">
//                             <li class="nav-item">
//                                 <a class="nav-link active" aria-current="page" href="/adminpage">Home</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="/addproducts">AddProducts</a>
//                             </li>


//                             {/* Log Out */}




//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//             {showProfileModal && (
//                 <div className="modal show" tabIndex="-1" style={{ display: "block" }} role="dialog">
//                     <div className="modal-dialog">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title" id="profileModalLabel">
//                                     Profile Details
//                                 </h5>
//                                 <button type="button" className="btn-close" onClick={toggleProfileModal} aria-label="Close"></button>
//                             </div>
//                             <div className="modal-body text-center">
//                                 {user ? (
//                                     <>
//                                         <img
//                                             src={user.url}
//                                             alt="User"
//                                             className="rounded-circle mb-3"
//                                             style={{ width: "100px", height: "100px" }}
//                                         />
//                                         <p>Name: {user.name}</p>
//                                         <p>Email: {user.email}</p>

//                                     </>
//                                 ) : (
//                                     <button className="btn btn-primary" onClick={() => history.push("/login")}>Login</button>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             )}
//         </div>
//     );
// }

// export default Navbar;

// 2

// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const Navbar = ({ user }) => {
//     const [showProfileModal, setShowProfileModal] = useState(false);

//     const toggleProfileModal = () => {
//         setShowProfileModal(!showProfileModal);
//     };

//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg bg-body-tertiary">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="/adminpage">Acceres</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <a className="nav-link active" aria-current="page" href="/adminpage">Home</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="/addproducts">AddProducts</a>
//                             </li>
//                         </ul>
//                     </div>
//                     <button className="btn btn-outline-primary" onClick={toggleProfileModal}>
//                         {user ? `Welcome, ${user.name}` : 'Login'}
//                     </button>
//                 </div>
//             </nav>
//             {showProfileModal && (
//                 <div className="modal show" tabIndex="-1" style={{ display: "block" }} role="dialog">
//                     <div className="modal-dialog">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title" id="profileModalLabel">Profile Details</h5>
//                                 <button type="button" className="btn-close" onClick={toggleProfileModal} aria-label="Close"></button>
//                             </div>
//                             <div className="modal-body text-center">
//                                 {user ? (
//                                     <>
//                                         <img
//                                             src={user.url}
//                                             alt="User"
//                                             className="rounded-circle mb-3"
//                                             style={{ width: "100px", height: "100px" }}
//                                         />
//                                         <p>Name: {user.name}</p>
//                                         <p>Email: {user.email}</p>
//                                     </>
//                                 ) : (
//                                     <button className="btn btn-primary" onClick={() => history.push("/login")}>Login</button>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// // export default Navbar;





// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom";

// const Navbar = ({ user }) => {
//     const [showProfileModal, setShowProfileModal] = useState(false);
//     const navigate = useNavigate();

//     const toggleProfileModal = () => {
//         setShowProfileModal(!showProfileModal);
//     };

//     return (
//         <>

//             <nav className="navbar navbar-expand-lg bg-body-tertiary">
//                 <div className="container">
//                     <a className="navbar-brand" href="/adminpage">Acceres</a>
//                     <button
//                         className="navbar-toggler"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#navbarNav"
//                         aria-controls="navbarNav"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation"

//                     >
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse " id="navbarNav">
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <a className="nav-link active" aria-current="page" href="/adminpage">Home</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="/addproducts">AddProducts</a>
//                             </li>

//                         </ul>

//                     </div>
//                     <div className="collapse navbar-collapse justify-content-end">
//                         <ul className="navbar-nav">
//                             <li className="nav-item dropdown">
//                                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     {user?.url && <img src={user.url} alt="User" className="rounded-circle" style={{ width: "30px", height: "30px" }} />}
//                                 </a>
//                                 <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
//                                     <li>
//                                         <span className="dropdown-item">{user?.name}</span>
//                                     </li>
//                                     <li>
//                                         <hr className="dropdown-divider" />
//                                     </li>
//                                     <li className="dropdown-item" onClick={toggleProfileModal}>
//                                         Profile
//                                     </li>
//                                     <li>
//                                         <Link className="dropdown-item" to="/">
//                                             Logout
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>


//             {showProfileModal && (
//                 <div className="modal show" tabIndex="-1" style={{ display: "block" }} role="dialog">
//                     <div className="modal-dialog">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title" id="profileModalLabel">Profile Details</h5>
//                                 <button type="button" className="btn-close" onClick={toggleProfileModal} aria-label="Close"></button>
//                             </div>
//                             <div className="modal-body text-center">
//                                 {user ? (
//                                     <>
//                                         <img
//                                             src={user.url}
//                                             alt="User"
//                                             className="rounded-circle mb-3"
//                                             style={{ width: "100px", height: "100px" }}
//                                         />
//                                         <p>Name: {user.name}</p>
//                                         <p>Email: {user.email}</p>
//                                     </>
//                                 ) : (
//                                     <button className="btn btn-primary" onClick={() => navigate("/login")}>Login</button>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Navbar;

//3



// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// const Navbar = ({ user }) => {
//     const [showProfileModal, setShowProfileModal] = useState(false);
//     const navigate = useNavigate();

//     const toggleProfileModal = () => {
//         setShowProfileModal(!showProfileModal);
//     };

//     return (
//         <>
//             <nav className="navbar navbar-expand-lg bg-body-tertiary">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand" to="/adminpage">Acceres</Link>
//                     <button
//                         className="navbar-toggler"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#navbarNav"
//                         aria-controls="navbarNav"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation"
//                     >
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <Link className="nav-link active" aria-current="page" to="/adminpage">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/addproducts">Add Products</Link>
//                             </li>
//                         </ul>
//                         <ul className="navbar-nav ms-auto">
//                             <li className="nav-item dropdown">
//                                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     {user?.url && <img src={user.url} alt="User" className="rounded-circle" style={{ width: "30px", height: "30px" }} />}
//                                 </a>
//                                 <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
//                                     <li>
//                                         <span className="dropdown-item">{user?.name}</span>
//                                     </li>
//                                     <li><hr className="dropdown-divider" /></li>
//                                     <li className="dropdown-item" onClick={toggleProfileModal}>Profile</li>
//                                     <li>
//                                         <Link className="dropdown-item" to="/">Logout</Link>
//                                     </li>
//                                 </ul>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>

//             {showProfileModal && (
//                 <div className="modal show" tabIndex="-1" style={{ display: "block" }} role="dialog">
//                     <div className="modal-dialog">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title" id="profileModalLabel">Profile Details</h5>
//                                 <button type="button" className="btn-close" onClick={toggleProfileModal} aria-label="Close"></button>
//                             </div>
//                             <div className="modal-body text-center">
//                                 {user ? (
//                                     <>
//                                         <img
//                                             src={user.url}
//                                             alt="User"
//                                             className="rounded-circle mb-3"
//                                             style={{ width: "100px", height: "100px" }}
//                                         />
//                                         <p>Name: {user.name}</p>
//                                         <p>Email: {user.email}</p>
//                                     </>
//                                 ) : (
//                                     <button className="btn btn-primary" onClick={() => navigate("/login")}>Login</button>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const toggleProfileModal = () => {
        setShowProfileModal(!showProfileModal);
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/adminpage">Acceres</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/adminpage">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addproducts">Add Products</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {user?.url && <img src={user.url} alt="User" className="rounded-circle" style={{ width: "30px", height: "30px" }} />}
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li>
                                        <span className="dropdown-item">{user?.name}</span>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li className="dropdown-item" onClick={toggleProfileModal}>Profile</li>
                                    <li>
                                        <span className="dropdown-item" onClick={handleLogout}>Logout</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {showProfileModal && (
                <div className="modal show" tabIndex="-1" style={{ display: "block" }} role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="profileModalLabel">Profile Details</h5>
                                <button type="button" className="btn-close" onClick={toggleProfileModal} aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center">
                                {user ? (
                                    <>
                                        <img
                                            src={user.url}
                                            alt="User"
                                            className="rounded-circle mb-3"
                                            style={{ width: "100px", height: "100px" }}
                                        />
                                        <p>Name: {user.name}</p>
                                        <p>Email: {user.email}</p>
                                    </>
                                ) : (
                                    <button className="btn btn-primary" onClick={() => navigate("/login")}>Login</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
