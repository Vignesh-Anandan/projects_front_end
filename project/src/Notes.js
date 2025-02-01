import React from "react";

const Notes = ({ values}) => {
    return (
      <div>
        <ul>
          {values.map((value, index) => (
            <li key={index}>{value}<button >remove</button></li> 
          ))}
        </ul>
      </div>
    );
  };
  

export default Notes;