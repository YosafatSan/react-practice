import React from "react";

function SpeciesFilter({ newFilter }) {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">Filter Specie</span>
            </div>
            <input type="text" onChange={ newFilter } className="form-control" id="species-filter" aria-describedby="basic-addon3" />
        </div>
        );
}

export default SpeciesFilter;
