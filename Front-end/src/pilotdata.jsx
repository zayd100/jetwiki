import CardP from "./pilotcard";
import { useState, Suspense, useEffect } from "react";
import axios from "axios";

function Pilotd(){
    const [sortedcards,setsortedcards]= useState([]);
    useEffect(()=>{
    axios.get("http://localhost:5000/api/pilots")
    .then((res)=>{
        console.log("recieved fromt the server: ", res.data);
        setsortedcards(res.data);
    })
    .catch((err)=> console.error("error, restart the server", err));





}, []);
const showall = () =>{
    axios.get("http://localhost:5000/api/pilots")
    .then((res)=>{
        console.log("success, all cards for pilots: ", res.data);
        setsortedcards(res.data);

})
.catch((err)=>console.log(err));

};
const sortkills = () => {
    const sortedkills = [...sortedcards].sort((a,b)=>b.kills-a.kills);
    setsortedcards(sortedkills);
}
return (
    <div className="app-container">
        <button className="abd" onClick={showall}> Show all</button>
        <button className="abd" onClick={sortkills}>Sort by Most kills</button>
        <div className="future-cards-contianer">
            {sortedcards.map((card,index)=>(
            <CardP
            key={index}
            {...card}
            />
))}
        </div>
    
    
    
    
    
    
    
    
    
    
    </div>



)
}

export default Pilotd;
