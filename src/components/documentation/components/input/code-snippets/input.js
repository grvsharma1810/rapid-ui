const input = `<form class="form needs-validation" novalidate onsubmit="formSubmit(event)">
    <div class="form-row">
        <p class="form-field">
            <label htmlFor="first_name">First Name</label>
            <input id="first_name" type="text" placeholder="First name" name="firstName" required/>  
            <span class="error-msg">Please enter valid name</span>
            <span class="success-msg">Looks Good</span>
        </p> 
        <p class="form-field">
            <label htmlFor="middle_name">Middle Name</label>
            <input id="middle_name" type="text" placeholder="Middle name" required/>
            <span class="error-msg">Please enter valid name</span>
            <span class="success-msg">Looks Good</span>
        </p> 
        <p class="form-field">
            <label htmlFor="last_name">Last Name</label>
            <input id="last_name" type="text" placeholder="Last name" required/>
            <span class="error-msg">Please enter valid name</span>
            <span class="success-msg">Looks Good</span>
        </p> 
    </div>   
    <div class="form-row">
        <p class="form-field">
            <label htmlFor="mob">Mobile Number</label>
            <input id="mob" type="number" placeholder="Mobile Number" required/> 
            <span class="error-msg">Please enter valid Number</span>
            <span class="success-msg">Looks Good</span>
        </p>                  
        <p class="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Email" required/>
            <span class="error-msg">Please enter valid email</span>
            <span class="success-msg">Looks Good</span>
        </p>
    </div> 
    <div class="form-row">
        <p class="form-field">
            <label htmlFor="Comments">Comments</label>
            <textarea id="Comments" placeholder="Comments"></textarea>
            <span class="error-msg">Please enter valid Comments</span>
            <span class="success-msg">Looks Good</span>
        </p>
        <p class="form-field">
            <label htmlFor="pwd">Password</label>
            <input id="pwd" type="password" placeholder="Password" required/>
            <span class="error-msg">Please enter valid Password</span>
            <span class="success-msg">Looks Good</span>
        </p>                    
    </div>
    <div class="form-row">
        <p class="form-field">
            <label htmlFor="cars">Choose a car:</label>
            <select name="cars" id="cars" required>
                <option value="">Choose..</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
            <span class="error-msg">Please enter valid name</span>
            <span class="success-msg">Looks Good</span>
        </p>                              
    </div> 
    <div class="form-row">     
        <p class="form-check">
            <input type="checkbox" id="vehicle" name="vehicle1" value="Bike" required/> 
            <label htmlFor="vehicle"> I have a bike</label>                    
            <span class="error-msg">Please check this box</span>
            <span class="success-msg">Looks Good</span>
        </p>                                                                                           
    </div>
    <div>
        <button class="btn-solid primary">Submit</button>
    </div>                                  
</form>`

export default input;