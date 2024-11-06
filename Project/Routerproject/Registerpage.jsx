import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registerpage = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault(); // Prevent default form submission
        // Simple validation
        if (fullName && email && password) {
            try {
                // Create a new user object
                const newUser = {
                    fullName: fullName,
                    email: email,
                    password: password,
                };

                // Send POST request to add the new user to db.json
                await axios.post('http://localhost:3000/users', newUser);

                // Redirect to the Signin page after successful registration
                navigate("/Signinpage");
            } catch (error) {
                console.error("Error registering user:", error);
                alert("Failed to register. Please try again.");
            }
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundImage: "url('https://campuscloud.pk/wp-content/uploads/2023/03/choose-school-management-system-2048x1366.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'left',
            height: '550px',
            borderRadius: '20px'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '550px',
                width: '450px',
                borderRadius: '30px'
            }}>
                <h1 style={{ color: 'white', alignItems: 'flex-start' }}><b><i>Create your <br /> account</i></b></h1>
                <form onSubmit={handleRegister}>
                    <br />
                    <input
                        type="text"
                        placeholder='Full Name'
                        style={{ backgroundColor: 'whitesmoke', color: 'black', borderRadius: '5px', height: '30px', width: '250px' }}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <br /><br />
                    <input
                        type="email"
                        placeholder='Email / Phone'
                        style={{ backgroundColor: 'whitesmoke', color: 'black', borderRadius: '5px', height: '30px', width: '250px' }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br /><br />
                    <input
                        type='password'
                        placeholder='Enter Password'
                        style={{ backgroundColor: 'whitesmoke', color: 'black', borderRadius: '5px', height: '30px', width: '250px' }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br /><br />
                    <button type="submit" style={{ backgroundColor: 'white', borderRadius: '5px', height: '40px', width: '150px', color: 'darkblue' }}><b>Register</b></button>
                    <h4 style={{ color: 'white' }}>Already Have An Account? <a href='/Signinpage'>Sign in!!</a></h4>
                    <hr style={{ height: '2px', backgroundColor: 'white', width: '300px' }} />
                    <h4 style={{ color: 'white' }}><b>Continue with Accounts</b></h4>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <img src='https://purepng.com/public/uploads/large/purepng.com-apple-logologobrand-logoiconslogos-251519938788qhgdl.png' alt='Apple Logo' style={{ height: '50px' }} />
                        <img src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png' alt='Google Logo' style={{ height: '60px' }} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registerpage;
