import React, { useRef } from "react";

function SpeciesFilter({ onFilterChange }) {
    const textInput = useRef();

    const onChangeHandler = () => {
        const newValue = textInput.current.value;

        if(typeof onFilterChange === "function") { onFilterChange(newValue); }
    }

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">Filter Specie</span>
            </div>
            <input type="text" ref={ textInput } name="species-filter" onChange={ onChangeHandler } className="form-control" id="species-filter" aria-describedby="basic-addon3" />
        </div>
        );
}

export default SpeciesFilter;
