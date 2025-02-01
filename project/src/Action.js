import { useState } from "react";

const Action = ({ onSubmit }) => {

    const [inputtext, setInputpara] = useState("");

    const handleInputChange = (e) => {
        setInputpara(e.target.value); // Update local state as user types
      };

    const handleSubmitClick = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        if(inputtext.trim()){
        onSubmit(inputtext);
      };// Call the parent function to update the state
        setInputpara(''); 
      };

    return(<div>
        <div>
            <input type="text" value={inputtext} onChange={handleInputChange} />
            <button onClick={handleSubmitClick}>Submit</button>           
        </div>
    </div>);
};

export default Action;