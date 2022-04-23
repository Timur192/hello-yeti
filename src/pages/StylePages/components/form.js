import React from "react";

const Form = (props) => {
    return (
    <form  onSubmit={props.weatherMethod}>
        <input className="search-box" type="text" name="city" placeholder="location"/>
        <button className="button2">Get weather</button>
    </form>
    );
}
    
export default Form;
