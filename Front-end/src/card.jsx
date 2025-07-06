import PropTypes from 'prop-types'
import { useState } from 'react';

const Card = ({jetname, pse, features, year, image, rating, kills, likeher, eth, weight,desc}) => {
    
    const isTopRated = rating === 5;
    const getStars = (num) => "⭐".repeat(num);
    const [showDesc, setShowDesc] = useState(false);

    const toggleDescription = () => {
        setShowDesc(prev => !prev);
    };

    return(
        <div className="future-card" >
            <div className="future-image-container">
                {isTopRated && <div className="future-top-badge">top👑</div>}
                <img src={image} alt={jetname} className='future-image'/>
            </div>
            <div className="future-card-content">
                <h1 className="future-card-head">{jetname}</h1>
                <p className='future-card-head'>{pse}</p>
                <p className="future-card-text">features: {features}</p>
                <p className="future-card-text">Year Announced: {year}</p>
                <p className="future-rating">Rating: {getStars(rating)}</p>
                <p className="future-body">Confirmed Kills: {kills}</p>
                <p className="future-like">Stealth: {likeher ? "Yes" : "No"}</p>
                <p className="future-body">Country of Origin : {eth}</p>
                <p className="future-body">Weight: {weight} K.G</p>
                
                <button className="future-btn" onClick={toggleDescription}>
                    {showDesc ? "Hide Description" : "Show Description"}
                </button>
                {showDesc && <p className='future-card-text-desc'>{desc}</p>}
            </div>
        </div>
    );
};

Card.propTypes = {
    jetname: PropTypes.string.isRequired,
    pse: PropTypes.string.isRequired,
    features: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    kills: PropTypes.number.isRequired,
    likeher: PropTypes.bool.isRequired,
    eth: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    desc: PropTypes.string
};

export default Card;