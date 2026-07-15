import React from "react";

function Lists() {
    let cars = ["Ford", "BMW", "Audi"];

    return (
        <div>
            <ul>
                {cars.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        </div>
    );
}

export default Lists;