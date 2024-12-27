import React from "react";
import ReactDOM from "react-dom/client"

//React Element
const Headline = ()=>(
<h1>Learning     
    React Title</h1>);

//React Componentit
const HeadingComponent =() =>{
   return <div className="heading">
    {<Headline />}
    {Headline()}
    {<Headline></Headline>}
    <h1>It is HeadingComponent</h1>
    </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);