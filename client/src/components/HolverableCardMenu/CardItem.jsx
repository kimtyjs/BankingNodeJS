import React from "react";
import { Link } from "react-router-dom";

const CardItem = props => {

    const backgroundImage = {
        backgroundImage: `url(${props.img})`
    };

    return(
        <div className="card-item">
            <div className="card-background" style={ backgroundImage }/>
            <div className="card-content">
                <h4 className="card-titles">This Exchange Rate</h4>
                <span className="card-meta">Regroup all updating info in detail</span>
                <Link to="#" className="card-link">Go to Page</Link>
            </div>
        </div>
    );
};

export default CardItem;