import { useReducer } from "react";

function DateTime({date}) {
    // This is scraped
    const form = 
    <>
        <div className="bg-white" style={{display: "inline-flex", margin: "20px", padding: "20px"}}>
            <input type="text" style={{border: "2px solid black", width: "60px"}} placeholder="Hour"/>:
            <input type="text" style={{border: "2px solid black", width: "60px"}} placeholder="Minute"/>:
            <input type="text" style={{border: "2px solid black", width: "60px"}} placeholder="Second"/>
        </div>
    </>

    return form;
}

export default DateTime;