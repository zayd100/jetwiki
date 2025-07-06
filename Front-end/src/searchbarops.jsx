import PropTypes from "prop-types";

const OpBar = ({value,onChange})  => {
    return(
        <div className="search-bar-container">
            <input
            type="text"
            className="search-input"
            placeholder="Search Operations"
            value={value}
            onChange={onChange}
            
            
            
            />






        </div>

    );
}
export default OpBar;