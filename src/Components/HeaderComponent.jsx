const HeaderComponent = (props) => {

    function handleMe(){
        console.log("Its me handled");
    }

    return ( 
        <>
           

        <div className="container">
            {/* <h1 className="content">{name}</h1> */}
                <button className="btn btn-primary"  onClick={()=>{handleMe()}}>ClickMe</button>
        </div>   

        </>
        //InlineStyle added as json formate.
     );
}
 
export default HeaderComponent;