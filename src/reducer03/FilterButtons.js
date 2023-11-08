import React from "react";

const FilterButtons = ({ setFilter }) => {
    return (
        <div>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("completed")}>Completed</button>
            <button onClick={() => setFilter("uncompleted")}>
                Uncompleted
            </button>
        </div>
    );
};

export default FilterButtons;
