import React from "react";
import Connects from "./connect";
import SearchBar from "./searchbar";
import { useState, useEffect } from "react";
import axios from "axios";
const Connections = () => {
             `            `
  const [sortedCards, setsorted] = useState([]);
const [newConnection,setNewConnection] = useState({
  name: "",
  age: "",
  specialiazation: "",
  headquarters: "",
  notableproject: "",
  year_met: ""
});

// Fetch data from backend
useEffect(() => {
  axios.get("http://localhost:5000/api/items")
    .then((res) => {
         console.log("Fetched from backend:", res.data);
      setsorted(res.data);
      
    })
    .catch((err) => console.error("Failed to fetch:", err));
}, []);



const [searchQuery, setSearchQuery] = useState("");
    

    const filterconnections = sortedCards.filter((item=>item.name.toLowerCase().includes(searchQuery.toLowerCase())||
    item.specialization.toLowerCase().includes(searchQuery.toLowerCase())||
    item.headquarters.toLowerCase().includes(searchQuery.toLowerCase())||
    item.notableproject.toLowerCase().includes(searchQuery.toLowerCase())
)


);
     const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const sortyoung = () =>{
    const sortr = [...sortedCards].sort((a,b)=> a.founded-b.founded);
    setsorted(sortr)
  }
  const sortyear = () => {
    const sorty = [...sortedCards].sort((a,b)=>b.founded-a.founded);
    setsorted(sorty);
  }
  return(
    <div>
        <p>2</p>
        <p>2</p>
 <div className="search">
         <SearchBar value={searchQuery} onChange={handleSearchChange} />
                 <div className="button-container">
        <button onClick={sortyoung} className="abd">Oldest</button>
        <button className="abd" onClick={sortyear}>Recent</button>

        </div>
         <div className="cards-container">
         {filterconnections.map((item,index)=> (
        <Connects key={index} {...item} image={`http://localhost:5000/images/${item.image}`}/>
        ))}

        </div>

</div>
</div>
);
}
export default Connections;