import React from "react";

function PhotoCard({ card, index }) {
    return (
        <div className="photho-card col-md-4">
            <div className="card">
                <img src={card.img} className="card-img-top" alt="photo" />
                <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary">Add to cart</button>
                        <button type="button" className="btn btn-primary">View photo</button>
                    </div>
                    <p className="card-text"><small className="text-muted">Last updated { index } mins ago</small></p>
                </div>
            </div>
        </div>

    );
}

export default PhotoCard;
