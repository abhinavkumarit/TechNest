




// // 2


// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const UserNavbar = ({ user }) => {
//     const location = useLocation();
//     const { user: locationUser } = location.state || {};

//     let navigate=useNavigate();

//     const [showProfileModal, setShowProfileModal] = useState(false);

//     const toggleProfileModal = () => {
//         setShowProfileModal(!showProfileModal);
//     }

//     function handleLogout(){
//         localStorage.removeItem("user");
//         navigate("/user")
//     }

//     return (
//         <>
//             <nav className="navbar navbar-expand-lg bg-body-tertiary">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#">TechNest</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
//                         data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
//                         aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <a className="nav-link active" aria-current="page" href="/user">Home</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="/cards"><i className="bi bi-cart4"></i>Card</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link disabled" style={{ cursor: "pointer" }} aria-disabled="true">About</a>
//                             </li>
//                         </ul>
//                         <button className="btn btn-primary" onClick={toggleProfileModal}>Profile</button>

//                         {showProfileModal && (
//                             <div className="modal show" tabIndex="-1" style={{ display: "block" }} role="dialog">
//                                 <div className="modal-dialog">
//                                     <div className="modal-content">
//                                         <div className="modal-header">
//                                             <h5 className="modal-title" id="profileModalLabel">Profile Details</h5>
//                                             <button type="button" className="btn-close" onClick={toggleProfileModal} aria-label="Close"></button>
//                                         </div>
//                                         <div className="modal-body text-center">
//                                             {locationUser ? (
//                                                 <>
//                                                     <img
//                                                         src={locationUser.url}
//                                                         alt="User"
//                                                         className="rounded-circle mb-3"
//                                                         style={{ width: "100px", height: "100px" }}
//                                                     />
//                                                     <p>Name: {locationUser.name}</p>
//                                                     <p>Email: {locationUser.email}</p>
//                                                     <button
//                                                         className="btn btn-danger mt-3"
//                                                         onClick={handleLogout}
//                                                     >
//                                                         Logout
//                                                     </button>
//                                                 </>
//                                             ) : (
//                                                 <a href="/UloginPage">
//                                                     <button className="btn btn-success mt-3">Login</button>
//                                                     {/* <i className="bi bi-box-arrow-in-right text-dark"></i> */}
//                                                 </a>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default UserNavbar;





// 3


import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserNavbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [showProfileModal, setShowProfileModal] = useState(false);
    const [user, setUser] = useState(null);
    

    // color

    const [navColor, setNavColor] = useState("#000");

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const toggleProfileModal = () => {
        setShowProfileModal(!showProfileModal);
    }

    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        setUser(null);
        navigate("/user");
    }


    // color

    useEffect(() => {
        const colors = ["#000", "#007bff", "#28a745", "#dc3545", "#ffc107"];
        let colorIndex = 0;
        const interval = setInterval(() => {
            colorIndex = (colorIndex + 1) % colors.length;
            setNavColor(colors[colorIndex]);
        }, 1000); // Change color every 1 second
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TechNest</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/user">Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/cards"><i className="bi bi-cart4"></i>Card</a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link disabled" style={{ cursor: "pointer" }} aria-disabled="true">About</a>
                                
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" style={{ cursor: "pointer" }} aria-disabled="true">Contact</a>
                                
                            </li>
                        </ul>


                        {/* color */}
                        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="" style={{cursor:"pointer"}}>Shoes</a></li>
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="" style={{cursor:"pointer"}}>Cloths</a></li>
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="" style={{cursor:"pointer"}}>Computer</a></li>
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="" style={{cursor:"pointer"}}>Toyes</a></li>
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="" style={{cursor:"pointer"}}>KitchensItems</a></li>
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="" style={{cursor:"pointer"}}>MakeupKits</a></li>



                        </ul> */}

<ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {["Shoes", "Cloths", "Computer", "Toyes", "KitchensItems", "MakeupKits"].map((item, index) => (
                                <li className="nav-item" key={index}>
                                    {/* <a className="nav-link active" aria-current="page" href="" style={{ cursor: "pointer", color: navColor }}>{item}</a> */}
                                    <a 
                                        className="nav-link active" 
                                        aria-current="page" 
                                        href="" 
                                        style={{ 
                                            cursor: "pointer", 
                                            color: navColor, 
                                            position: "relative", 
                                            transition: "color 0.3s ease" 
                                        }}
                                        onMouseOver={(e) => {
                                            e.target.style.color = "#007bff";
                                            const underline = document.createElement('div');
                                            underline.style.position = "absolute";
                                            underline.style.width = "100%";
                                            underline.style.height = "2px";
                                            underline.style.backgroundColor = "#007bff";
                                            underline.style.bottom = "-2px";
                                            underline.style.left = "0";
                                            e.target.appendChild(underline);
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.color = navColor;
                                            e.target.querySelector('div')?.remove();
                                        }}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>


                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <a className="nav-link" href="/cards"><i className="bi bi-cart4"></i>Card</a>
                            </li>
                        </ul>
                        <button className="btn btn-primary" onClick={toggleProfileModal}>Profile</button>

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
                                                    <button
                                                        className="btn btn-danger mt-3"
                                                        onClick={handleLogout}
                                                    >
                                                        Logout
                                                    </button>
                                                </>
                                            ) : (
                                                <a href="/UloginPage">
                                                    <button className="btn btn-success mt-3">Login</button>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default UserNavbar;
