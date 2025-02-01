import { useState } from "react";
import Action from "./Action";
import Header from "./Header";
import Notes from "./Notes";

const NoteApp = () => {
        // Declare a state to hold the input value
        const [inputValue, setInputValue] = useState([]);
      
        // Function to update the state from the InputComponent
        const handleSubmit = (value) => {
          setInputValue([...inputValue,value]);
          console.log(handleSubmit)
          console.log(inputValue)
    }
    return(<div className="Outline">          
            <div>  
        <Header />
        <Notes values={inputValue} />
        <Action onSubmit={handleSubmit} />
        </div>    
    </div>);
};

export default NoteApp;