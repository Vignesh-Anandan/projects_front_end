import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement("div",{id: "parent"},
    React.createElement("div",{id: "child"},
    React.createElement("h1",{}, "i am h1")
)
);

console.log(parent);


const heading = React.createElement
("h1", 
    {id : "heading"}, 
    "You will be Developer soon");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);