import Card from "./card";
import { Suspense, useState, useEffect } from "react";
import SearchBar from "./searchbar";
import axios from "axios";


function Cd() {
 const [lastAddedCard, setLastAddedCard] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortedCards, setSortedCards] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:5000/api/girls")
    .then((res)=>{
      console.log("got it from the server: ", res.data);
        setSortedCards(res.data);
    })
    .catch((err)=> console.error("error with the backend, restart server!",err));
  }, []);

  
  const showall= () =>{
    axios.get("http://localhost:5000/api/girls")
    .then((res)=>{
      console.log("success, here are all cards: ", res.data);
      setSortedCards(res.data);
    })
    .catch((err)=> console.error("error!",err));
  };

const undoLastCard = async () => {
  if (!lastAddedCard || !lastAddedCard._id) {
    alert("No recent card to undo");
    return;
  }

  try {
    // Call backend to delete the last added card
    const response = await axios.delete(`http://localhost:5000/api/girls/${lastAddedCard._id}`);
    
    // Update local state by filtering out the deleted card
    setSortedCards(prevCards => prevCards.filter(card => card._id !== lastAddedCard._id));
    setLastAddedCard(null);
    alert(`Card "${response.data.deletedGirl.jetname}" removed successfully`);
  } catch (err) {
    console.error("Failed to undo last card:", err);
    alert("Failed to undo last card");
  }
};

  const[lastdel, setlastdel] = useState(null); 
  // using hooks for understanding the differences between the components that are going to be used in our react app.


  // Sorting function (now works numerically)
  const sortByRating = () => {
    const sorted = [...sortedCards].sort((a, b) => b.rating - a.rating);
    setSortedCards(sorted);
  };
    //sort by year
    const sortByAge = () =>{
      const sorta = [...sortedCards].sort((a, b)=>a.year - b.year);
      setSortedCards(sorta)
    }
    const sortage= ()=>{
      const agey = [...sortedCards].sort((a,b)=>b.year-a.year);
      setSortedCards(agey);
    }
  //sorting reverse
  const sortmin = ()=> {
    const sortm = [...sortedCards].sort((a,b)=> a.rating - b.rating);
   setSortedCards(sortm);
  }
  //most fked
  const mostkilled = () => {
    const mostf = [...sortedCards].sort((a,b)=> b.kills - a.kills);
    setSortedCards (mostf)
  }
  //Fattest
  const mostfat = () => {
    const mfat = [...sortedCards].sort((a,b)=> b.weight-a.weight);
    setSortedCards(mfat);
  }
const mostskin = () => {
  const mskin = [...sortedCards].sort((a,b)=> a.weight-b.weight);
  setSortedCards(mskin);
}


  // Filter cards based on search query
  const filteredCards = sortedCards.filter(card =>
    card.jetname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.features.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.eth.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle search input changes
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  //new hook for crud card.
 const [newcard, setnewcard] = useState({
  jetname: "",
  pse: "",
  features: "",
  year: "",
  image: "",
  rating: "",
  kills: "",
  likeher: false,
  eth: "",
  weight: "",
  desc: ""
});
const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setnewcard((prev) => ({ 
        ...prev, 
        image: reader.result 
      }));
    };
    reader.onerror = () => {
      console.error('Error reading file');
      alert('Error reading file');
    };
    reader.readAsDataURL(file);
  }
};

  
const fivestar = () => {
  const showonly = [...sortedCards].filter((card) => card.rating === 5);
  setSortedCards(showonly);
}
const stealthonly = () =>{
  const stonly = [...sortedCards].filter((card)=>card.likeher == true);
  setSortedCards(stonly);
}
const formSubmit = async (e) => {
  e.preventDefault();

  const cardToAdd = {
    ...newcard,
    year: parseInt(newcard.year) || 0,
    rating: parseInt(newcard.rating) || 0,
    kills: parseInt(newcard.kills) || 0,
    weight: parseInt(newcard.weight) || 0
  };

  try {
    const res = await axios.post("http://localhost:5000/api/girls", cardToAdd);
    console.log("Card successfully added:", res.data);
    
    // Store the last added card
    setLastAddedCard(res.data);
    
    // Update the cards list
    const updated = await axios.get("http://localhost:5000/api/girls");
    setSortedCards(updated.data);

    // Reset form
    setnewcard({
      jetname: "",
      pse: "",
      features: "",
      year: "",
      image: "",
      rating: "",
      kills: "",
      likeher: false,
      eth: "",
      weight: "",
      desc: ""
    });
    e.target.reset();
  } catch (err) {
    console.error("Failed to add card to backend:", err);
  }
};

  // Convert rating number to stars
  const getStars = (rating) => "⭐".repeat(rating);

  return (
    <div className="app-container">
  
      <div className="search">
        <SearchBar value={searchQuery} onChange={handleSearchChange} />
        <button className="abd" onClick={sortByRating}>rating✨</button>
        <button className="abd" onClick = {sortmin}>lowest</button>
        <button className="abd" onClick ={stealthonly}>Stealth</button>
        <button className="abd" onClick={sortByAge}>Oldest</button>
        <button className="abd" onClick={sortage}>Recent</button>
        <button className="abd" onClick={mostkilled}>Kills</button>
        <button className="abd" onClick={mostfat}>Heaviest</button>
        <button className="abd" onClick= {mostskin}>Lightest</button>
        <button className="abd" onClick={fivestar}>5 star</button>
        <button className="abd" onClick={showall} >All Jets</button>
        <div className="future-cards-container">
          {filteredCards.map((card, index) => (
            <Card key={index} {...card} image={`http://localhost:5000/images/${card.image}`}   />
          ))}
        </div>
       <form onSubmit={formSubmit}>
<div className="form-container">
  <div className="modern-file-input">
    <input
      type="file"
      accept="image/*"
      onChange={(e) => handleImageUpload(e)}
    />
  </div>
  
  <input className="modern-input" type="text" placeholder="Name" value={newcard.jetname} onChange={(e)=> setnewcard({...newcard, jetname: e.target.value})} />
  <input className="modern-input" type="text" placeholder="Headline:" value={newcard.pse} onChange={(e)=> setnewcard({...newcard, pse: e.target.value})} />
  <input className="modern-input" type="text" placeholder="Features:" value={newcard.features} onChange={(e)=> setnewcard({...newcard, features: e.target.value})} />
  <input className="modern-input" type="number" placeholder="Year:" value={newcard.year} onChange={(e)=> setnewcard({...newcard, year: e.target.value})} />
  <input className="modern-input" type="text" placeholder="Country of origin:" value={newcard.eth} onChange={(e)=> setnewcard({...newcard, eth: e.target.value})} />
  <input className="modern-input" type="number" placeholder="Weight:" value={newcard.weight} onChange={(e)=> setnewcard({...newcard, weight: e.target.value})} />
  <input className="modern-input" type="text" placeholder="Description: " value={newcard.desc} onChange={(e)=> setnewcard({...newcard, desc: e.target.value})} />
  <input className="modern-input" type="number" placeholder="Rating 1-5" value={newcard.rating} onChange={(e)=> setnewcard({...newcard, rating: e.target.value})} />
  <input className="modern-input" type="number" placeholder="Kills:" value={newcard.kills} onChange={(e)=> setnewcard({...newcard, kills: e.target.value})} />
  
  <label className="modern-checkbox">
    <input type="checkbox" value={newcard.likeher} onChange={(e)=> setnewcard({...newcard, likeher: e.target.checked})} />
    <span className="checkmark"></span>
    <span className="label">Stealth?</span>
  </label>
  
  <button className="modern-btn" type="submit">Add</button>
    <button className="modern-btn" onClick={undoLastCard}>Undo Last</button>
</div>
        </form>

       
      </div>
    </div>
  );

}

export default Cd;
