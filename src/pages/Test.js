import React,{ useState } from "react";

const Test = () => {
    
    const [inputValue, setInputValue] = useState({
        email : "",
        password: ""
    });
    const {email, password} = inputValue

    const handleOnChange = (e)=>{
        const {name, value} = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
        console.log(inputValue)
    };
    
    return(

        <>
        <form >
            <input type="email" name="email" onChange={handleOnChange} /><br />
            <input type="password" name="password" onChange={handleOnChange} /><br />
            <button>Submit</button>
        </form>
        <h1>email :{email} , password: {password}</h1>
        </>
    );
};

export default Test;