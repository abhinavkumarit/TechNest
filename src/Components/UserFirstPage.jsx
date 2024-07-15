// import { useEffect, useState } from "react";
// import UserNavbar from "./UserNavbar";
// import ViewAllProducts from "./ViewAllProductsUser";
// // import {data} from "../Database/data.json";
// import { data } from "../Database/product.json";

// const UserFirstPage = () => {
//     const [searchTerm,setSearchTerm]=useState("");
//     const [filteredData,setFilteredData]=useState(data);
    
//     useEffect(()=>{
//         if(searchTerm===""){
//             setFilteredData(data);
//         }
//         else{
//             setFilteredData(
//                 data.filter(item=>
//                     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//                 )
//             );
//         }
//     },[searchTerm,data]);
    
    
//     return ( 
//     <>
//         <UserNavbar setSearchTerm={setSearchTerm}/>
//         <ViewAllProducts data={filteredData}/>
//     </> 
    
// );
// }
 
// export default UserFirstPage;




import {  useState } from "react";
// import axios from "axios";
import { useLocation } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import ViewAllProducts from "./ViewAllProductsUser";

const UserFirstPage = () => {
    // const [searchTerm, setSearchTerm] = useState("");
    // const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);


    const location = useLocation();
    const { user } = location.state || {};



    // useEffect(() => {
    //     // Fetch data from the API
    //     axios.get("http://localhost:3060/product")
    //         .then(response => {
    //             setData(response.data);
    //             setFilteredData(response.data); // Initially display all data
    //         })
    //         .catch(error => {
    //             console.error("Error fetching data:", error);
    //         });
    // }, []);

    // useEffect(() => {
    //     if (searchTerm === "") {
    //         setFilteredData(data);
    //     } else {
    //         setFilteredData(
    //             data.filter(item =>
    //                 item.category.toLowerCase().includes(searchTerm.toLowerCase())
    //             )
    //         );
    //     }
    // }, [searchTerm, data]);

    return (
        <>
            <UserNavbar user={user} />
            <ViewAllProducts data={filteredData} />
        </>
    );
}

export default UserFirstPage;
