import PropTypes from "prop-types";
import "./Card.css";

function Card({ classCustom, title, body, image, imageText, borderColor }) {
    return(
        <div className={`card ${classCustom}`} style={{borderTop: `4px solid ${borderColor}`}}>
            <div className="container">
                <h3>{title}</h3>
                <p>{body}</p>
                <img src={image} alt={imageText}/>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired
};

export default Card;