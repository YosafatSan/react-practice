import React from "react";

function PhotoCard({ title, text, imgURL }) {
    return (
        <div className="photho-card col-md-4">
            <div className="card">
                <img src={ imgURL } className="card-img-top" alt="wow" />
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text">{ text }</p>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary">Add to cart</button>
                        <button type="button" className="btn btn-primary">View photo</button>
                    </div>
                    <p className="card-text"><small className="text-muted">Last updated 0 mins ago</small></p>
                </div>
            </div>
        </div>

    );
}

export default PhotoCard;
