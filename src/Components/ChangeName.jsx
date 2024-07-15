import { useState } from "react";
const ChangeName = () => {

    const [name,setName]=useState("Dave");
    const [count,setCount]=useState(0);

   function fun(){
    // const [name,setName]=useState("Dave");
    let arr=["Aditya", "Abhishek", "Akshay", "sunny", "Nitesh"]
    const idx= Math.floor(Math.random()*3);
    setCount(count+1);
    setName(arr[idx]);
   }

    return ( 
        <div className="container-lg">
            <h1>{name}</h1>
            <div>
                <h1>{count}</h1>
            </div>
            <button onClick={()=>{fun()}} className="btn btn-primary">ChangeName</button>
        </div>

     );
}
 
export default ChangeName;