import React, {useState} from "react";

const Listdisplay = () => {

    const [InputText, setInputText] = useState("");// Hold the input text as a string

    const[Displaytext, setDisplaytext] = useState([]);// Hold the list of categories as an array

    const handleSubmit = (e) =>{
        e.preventDefault(); // Prevent page reload on form submission
        if (InputText.trim()) { // Only add non-empty input
          setDisplaytext([...Displaytext, InputText]); // Append the input text to the list
          setInputText(""); // Clear the input field
        };
        // setDisplaytext([...Displaytext, InputText]); // Append the input text to the list
        //   setInputText(""); // Clear the input field
 
    };

    const handleDelete = (index,e) => {
        setDisplaytext(Displaytext.filter((v, i) => i !== index));
    }

    return(
        <div>
           <div>
            <form onSubmit={handleSubmit}>
                <h1>Categories:</h1>
                <ul>
            {Displaytext.map((text, index) => (
              <li key={index}>{text}<button onClick={e=>handleDelete(index)}>X</button></li> // Display each item in the list
              ))}
          </ul>
                <input type = "text" value={InputText} onChange={(e) => {
                  setInputText(e.target.value);         // Update inputText state
                   }} />
                <button type="submit">add</button>
                </form>
           </div>
        </div>
    );

};

export default Listdisplay;