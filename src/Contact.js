// import { object } from 'underscore'
import contactCss from './Contact.module.css'
import logoImages from '/Users/ricardofeliz/Desktop/ecomv2/src/silogo.jpeg'
import { useState } from 'react'
function Contact(){
  

    const validateForm = ()=>{
        const fname = document.getElementById('fname')
        const lname = document.getElementById('lname')
        const email = document.getElementById('email')
        const textarea = document.getElementById('textarea')
    // check if inputs are empty, if empty border color and placeholder changes
        if(fname.value === '' || lname.value === ''|| email.value === '' |textarea.value ===''){
            fname.style.border = '1px solid red'
            fname.placeholder = 'Please fill out this field';
    
            lname.style.border = '1px solid red'
            lname.placeholder = 'Please fill out this field';
    
            email.style.border = '1px solid red'
            email.placeholder = 'Please fill out this field';
    
            textarea.style.border = '1px solid red'
            textarea.placeholder = 'Please fill out this field';
    
        } else{
            alert('Thank you for contacting us! We will get back to you shortly, Confirm submission by clicking OK')
            fname.value = '' 
            lname.value = ''
            email.value = '' 
            textarea.value =''

            fname.style.border = '1px solid black'
            fname.placeholder = 'First Name';
    
            lname.style.border = '1px solid black'
            lname.placeholder = 'Last Name';
    
            email.style.border = '1px solid black'
            email.placeholder = 'Email Address';
    
            textarea.style.border = '1px solid black'
            textarea.placeholder = 'Questions,Comments,Concerns';
        }
    
    }

    
// resets form by setting form values to empty
    const resetForm =()=>{
        fname.value = null
        lname.value =null
        email.value = null
        textarea.value = null

        fname.style.border = '1px solid black'
        fname.placeholder = 'First Name';

        lname.style.border = '1px solid black'
        lname.placeholder = 'Last Name';

        email.style.border = '1px solid black'
        email.placeholder = 'Email Address';

        textarea.style.border = '1px solid black'
        textarea.placeholder = 'Questions,Comments,Concerns';
    }

    
    const handleForm = async (event) => {
        validateForm()
        event.preventDefault()
    
        let form = event.target;
        let formData = new FormData(form);
        let formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj.values);
        try {
            const response = await fetch('http://localhost:800/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formDataObj)
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
        
            
        } catch (error) {
            console.error('Error:', error);
        }
 
    }













    return(
        <div className={contactCss.formContainer}>
            <form onSubmit={handleForm}{...validateForm} className={contactCss.form}>
            <h1>Contact Us</h1>
          <div className={contactCss.imageContainer}>
          <img className={contactCss.logoImages} src={logoImages}></img>
          </div>
           <label htmlFor="fname" name="fname" >FirstName</label>
           <input type="text" placeholder='First Name' name="fname" id="fname"></input>
           <label htmlFor="lname" name="lname" >LastName</label>
            <input type="text" placeholder='Last Name' name="lname" id="lname"></input>
            <label htmlFor="email" name="email" >Email address</label>
            <input type="email" placeholder='Email address' name="email" id="email"></input>
            <textarea placeholder='Questions,Comments,Concerns'  name="textarea"  id="textarea"></textarea>
          <div className={contactCss.buttonContainer}>
          <button className={contactCss.subButton}>Submit</button>
            <button className={contactCss.resetButton} onClick={resetForm} type="button">Reset</button>
          </div>
            </form>
        </div>
    )
   
    }
   



export default Contact