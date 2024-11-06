import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signinpage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleHome = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Ensure that username and password fields are filled
        if (username && password) {
            try {
                // Fetch all users from db.json
                const response = await axios.get('http://localhost:3000/users');
                const users = response.data;

                // Check if the username and password match any registered user
                const userExists = users.find(
                    user => user.fullName === username && user.password === password
                );

                if (userExists) {
                    // Navigate to the homepage if login is successful
                    navigate("/Homepageproject");
                } else {
                    alert('Invalid Username or Password');
                }
            } catch (error) {
                console.error("Error during sign-in:", error);
                alert('An error occurred. Please try again.');
            }
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundImage: "url('https://campuscloud.pk/wp-content/uploads/2023/03/choose-school-management-system-2048x1366.jpeg')",
                backgroundSize: 'cover',
                height: '550px',
                borderRadius: '30px'
            }}>
                <br /><br /><br /><br /><br />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '450px',
                    width: '650px',
                    borderRadius: '30px'
                }}>
                    <br /><br />
                    <h1 style={{ color: 'white' }}><b><i>Sign in!!</i></b></h1>
                    <br />
                    <form onSubmit={handleHome}>
                        <input
                            type='text'
                            placeholder='User name'
                            style={{ backgroundColor: 'whitesmoke', borderRadius: '5px', color: 'black', height: '30px', width: '250px' }}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <br /><br />
                        <input
                            type='password'
                            placeholder='Password'
                            style={{ backgroundColor: 'whitesmoke', borderRadius: '5px', color: 'black', height: '30px', width: '250px' }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <h4 style={{ color: 'white' }}>Forgot Password? <a href="/">Create new one</a></h4>
                        <button type="submit" style={{ backgroundColor: 'white', borderRadius: '5px', height: '40px', width: '150px', color: 'darkblue' }}><b>Submit</b></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signinpage;
