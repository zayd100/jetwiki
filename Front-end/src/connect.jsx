import React from "react";

const Connects = ({name, founded, specialization, headquarters, notableproject, image}) => {
    return (
        <div className="connect-card">
            <div className="connect-image-container">
                <img src={image} alt={name} className='connect-image'/>
            </div>
            <div className="connect-content">
                <p className="connect-head">{name}</p>
                <p className="connect-text">Year Founded: {founded}</p>
                <p className="connect-text">Specialization: {specialization}</p>
                <p className="connect-text">Headquarters: {headquarters}</p>
                <p className="connect-project">Notable Project: {notableproject}</p>
            </div>
        </div>
    );  
} 

export default Connects;