import PropTypes from "prop-types";

const Operationdata = ({op_name, op_year, op_goal, op_status, jets_used = [],image}) => {
    return(
        <div className="op-card">
                        <div className="future-image-container">
                <img src={image} alt={op_name} className='future-image'/>
            </div>
            <div className="op-card-content">
                <h2 className="op-card-head">{op_name}</h2>
                <p className="op-card-text">{op_year}</p>
                <p className="op-card-detail">{op_goal}</p>
                <div className="jets_container">
                    {jets_used.map((jet, index) => (
                        <span key={index} className="jet-badge">{jet}</span>
                    ))}
                </div>
                <p className="op-card-status">{op_status}</p>
            </div>
        </div>
    );
}

Operationdata.propTypes = {
    op_name: PropTypes.string.isRequired,
    op_year: PropTypes.string.isRequired,
    op_goal: PropTypes.string.isRequired,
    op_status: PropTypes.string.isRequired,
    jets_used: PropTypes.arrayOf(PropTypes.string)
};


export default Operationdata;