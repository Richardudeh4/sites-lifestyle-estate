// import { Link } from "react-router-dom";

// const [location,setLocation] = useState("");
// const [price,setPrice] = useState("");
// const [land,setLand] = useState("");
// const [house,setHouse] = useState("");
// const [property,setProperty] = useState([]);

// const values ={location,price,land}
// const handleSubmit =(values)=>{
//     try {
//         const request = fetch("property/search",{
//             method:"GET",
//             body:{
//                 location:values.location,
//                 price:price
//             }
//         });
//         const response = request.json();
//         if (response.status === 200) {
//             return response.data
//         }
//     } catch (error) {
//        const {response} = error;
//        console.error("fetching property details error",response)
//     }
// }

// const filterHandler =()=>{
//    const filteredData = properties?.find((property)=>property.land === land && property?.location=== location)
//    setProperty((prevState)=>{
//     return prevState?.find((property)=>property.land === land && property?.location=== location)
//    })

// const filteredData = dataFromDb?.filter((property)=>property.land === land && property?.location=== location)
// }
{
  /* <Link to={[`/product`,{
    state:property
}]}  >
    <button onClick={filterHandler} >
        Search
    </button>
</Link> */
}
