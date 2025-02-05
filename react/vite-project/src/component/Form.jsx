import React from 'react';

const Form = () => {
    function formHandler(e) {
        e.preventDefault(); 
        let form = e.target;
        let formData = new FormData(form);
        let data = Object.fromEntries(formData.entries()); 
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={formHandler}> 
                <label htmlFor="email">Email</label> 
                <input type="email" placeholder="Enter email" name="email" /> 
                
                <label htmlFor="password">Password</label> 
                <input type="password" placeholder="Enter password" name="password" /> 
                
                <button type="submit">Submit</button>    
            </form>      
        </div>
    );
}

export default Form;
