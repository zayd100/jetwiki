import OpBar from "./searchbarops";
import Operationdata from "./operationdata";
import { useState, useEffect } from "react";
import axios from "axios";


function Ops() {
  const [sortedcards, setSortedCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 


  useEffect(() => {
    axios.get("/api/ops")
      .then((res) => {
        console.log("Fetched from backend:", res.data);
        setSortedCards(res.data);
        setback(res.data); // Initialize backup
      })
      .catch((err) => console.error("Failed to fetch:", err));
  }, []);

  const filterdata = sortedcards.filter((item) => 
    item.op_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.op_goal.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.op_status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };





  const oldest = ()=>{
    const old = [...sortedcards].sort((a,b)=>a.op_year-b.op_year);
    setSortedCards(old);
  }
const recent = ()=>{
  const rec = [...sortedcards].sort((a,b)=>b.op_year-a.op_year);
  setSortedCards(rec);
}
  

  return (
  
     <div>
   
        <div className="ops-container">
      <div className="ops-search">
        <div>
         
        </div>
        <OpBar onChange={handleSearchChange}/>
      </div>
       <div className="ops-buttons">
        <button className="abd" onClick={recent}>recent</button>
        <button className="abd" onClick={oldest}>oldest</button>
      </div>
      <div className="ops-cards-list">
        {filterdata.map((card, index) => (
          <Operationdata key={index} {...card} image = {`http://localhost:5000/images/${card.image}`} />
        ))}
      </div>

          </div>
    </div>
  );


}
export default Ops;