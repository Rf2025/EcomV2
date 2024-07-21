import contactCss from './Contact.module.css';
import logoImages from './silogo.jpeg';
//import { useState } from 'react';

function Contact() {
    const validateForm = () => {
        const fname = document.getElementById('fname');
        const lname = document.getElementById('lname');
        const email = document.getElementById('email');
        const textarea = document.getElementById('textarea');

        // Check if inputs are empty, if empty, set border color and placeholder changes
        if (fname.value === '' || lname.value === '' || email.value === '' || textarea.value === '') {
            fname.style.border = '1px solid red';
            fname.placeholder = 'Please fill out this field';

            lname.style.border = '1px solid red';
            lname.placeholder = 'Please fill out this field';

            email.style.border = '1px solid red';
            email.placeholder = 'Please fill out this field';

            textarea.style.border = '1px solid red';
            textarea.placeholder = 'Please fill out this field';

            return false; // Return false to indicate form validation failed
        } else {
            return true; // Return true to indicate form validation passed
        }
    };

    // Resets form by setting form values to empty
    const resetForm = () => {
        const fname = document.getElementById('fname');
        const lname = document.getElementById('lname');
        const email = document.getElementById('email');
        const textarea = document.getElementById('textarea');

        fname.value = '';
        lname.value = '';
        email.value = '';
        textarea.value = '';

        fname.style.border = '1px solid black';
        fname.placeholder = 'First Name';

        lname.style.border = '1px solid black';
        lname.placeholder = 'Last Name';

        email.style.border = '1px solid black';
        email.placeholder = 'Email Address';

        textarea.style.border = '1px solid black';
        textarea.placeholder = 'Questions, Comments, Concerns';
    };

    const handleForm = async (event) => {
        event.preventDefault();

        // Validate the form before proceeding
        if (!validateForm()) {
            return; // Exit early if form validation fails
        }

        let form = event.target;
        let formData = new FormData(form);
        let formDataObj = Object.fromEntries(formData.entries());
        
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

            // Handle successful form submission (e.g., show success message)
            alert('Thank you for contacting us! We will get back to you shortly.');
            resetForm(); // Reset the form after successful submission

        } catch (error) {
            console.error('Error:', error);
            // Handle error (e.g., show error message)
            alert('There was an error submitting your form. Please try again later.');
        }
    };

    return (
        <div className={contactCss.formContainer}>
            <form onSubmit={handleForm} className={contactCss.form}>
                <h1>Contact Us</h1>
                <div className={contactCss.imageContainer}>
                    <img className={contactCss.logoImages} src={logoImages} alt="Logo" />
                </div>
                <label htmlFor="fname">First Name</label>
                <input type="text" placeholder="First Name" name="fname" id="fname" />
                <label htmlFor="lname">Last Name</label>
                <input type="text" placeholder="Last Name" name="lname" id="lname" />
                <label htmlFor="email">Email address</label>
                <input type="email" placeholder="Email address" name="email" id="email" />
                <textarea placeholder="Questions, Comments, Concerns" name="textarea" id="textarea"></textarea>
                <div className={contactCss.buttonContainer}>
                    <button className={contactCss.subButton} type="submit">Submit</button>
                    <button className={contactCss.resetButton} type="button" onClick={resetForm}>Reset</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
