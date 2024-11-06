import React, { useState } from "react";
import axios from 'axios';

const Contactus = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [query, setQuery] = useState('');

    const handleSendFeedback = () => {
        const feedback = {
            name,
            email,
            phone,
            dob,
            query
        };

        axios.post('http://localhost:3000/feedbacks', feedback)
            .then(response => {
                alert('Feedback sent successfully!');
                // Clear the form
                setName('');
                setEmail('');
                setPhone('');
                setDob('');
                setQuery('');
            })
            .catch(error => {
                console.error("Error sending feedback:", error);
            });
    };

    return (
        <div id="main" style={{display:'flex',flexDirection:'column',backgroundImage:"url('https://campuscloud.pk/wp-content/uploads/2023/03/choose-school-management-system-2048x1366.jpeg')",backgroundSize:'cover',backgroundPosition:'left',height:'auto'}}>
            <header>
                <div style={{display:'flex'}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOTzrqDnayaR8E0jam3k2Y6WhVg8Vme9MX2UnQ7Pr30818YbTzL1ZhnokqIRukFFPuN0&usqp=CAU" style={{height:'45px',width:'45px',borderRadius:'10px',paddingTop:'15px',paddingLeft:'10px'}}></img>
                    <h2 style={{paddingLeft:'20px',display:'flex',color:'black'}}><b><i>AcademiaTracker</i></b></h2>
                    <a href="Homepageproject" style={{paddingTop:'20px',paddingRight:'20px',paddingLeft:'450px',color:'white'}}>Home</a>
                    <a href="Homepageproject" style={{paddingTop:'20px',paddingRight:'20px',color:'white'}}>About us</a>
                    <a href="StudentManagementPage" style={{paddingTop:'20px',paddingRight:'20px',color:'white'}}>Create Profile</a>
                    <a href="aboutus.js" style={{paddingTop:'20px',paddingRight:'20px',color:'white'}}>Users</a>
                    <a href="aboutus.js" style={{paddingTop:'20px',paddingRight:'20px',color:'white'}}>Generate sheets</a>
                    <a href="Contactus" style={{paddingTop:'20px',paddingRight:'20px',color:'white'}}>Contact& Feedback</a> 
                    <div style={{paddingRight:'15px',paddingTop:'19px'}}>
                        <a href="Signinpage" style={{color:'white'}}>Login Page</a>
                    </div>  
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Eo_circle_deep-purple_white_letter-m.svg/480px-Eo_circle_deep-purple_white_letter-m.svg.png' alt='myImage' style={{height:'50px',paddingTop:'20px',paddingRight:'20px'}} />
                </div>
                <h1 style={{color:'black',paddingLeft:'200px',paddingTop:'60px'}}><b>Contact Us</b></h1>
                <div style={{paddingRight:'750px'}}>
                    <hr style={{height: '5px', backgroundColor:'red', width: '120px'}} />
                </div>
                <p style={{color:'black',paddingLeft:'200px'}}>Ring Us For Our Services</p>
            </header>
            
            <div id="four" style={{display:'flex',flexDirection:'row'}}>
                <div>
                    <img src="https://i.pinimg.com/1200x/b9/2a/64/b92a6450eb19329a37087f8035e1d033.jpg" style={{height:'400px',width:'600px'}} />
                </div>
                <div style={{height:'400px',width:'700px',color:'',backgroundColor:'pink'}}>
                    <br />
                    <h1 style={{paddingLeft:'110px'}}>Our Address</h1>
                    <div style={{paddingRight:'270px'}}>
                        <hr style={{height: '5px', backgroundColor:'red', width: '120px'}} />
                    </div>
                    <p style={{paddingLeft:'110px'}}>Academia Tracker Technology Solutions Limited,<br />Near Fun mall, Coimbatore<br />TamilNadu, India.</p> 
                    <h1 style={{paddingLeft:'110px'}}>Key Contacts</h1>
                    <div style={{paddingRight:'270px'}}>
                        <hr style={{height: '5px', backgroundColor:'red', width: '120px'}} />
                    </div>
                    <p style={{paddingLeft:'110px'}}>Please get in touch with the below details<br />Key Contact : Krishna <br />Telephone : +91-8615566010 <br />Email : info@academiaTracker.com</p>
                </div>
            </div>

            {/* Feedback Form */}
            <div style={{ padding: '20px', marginTop: '20px', backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: '15px', width: '60%', marginLeft: 'auto', marginRight: 'auto' }}>
                <h3 style={{ textAlign: 'center' }}>Send Us Your Feedback</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={{ padding: '10px', width: '80%' }} />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '10px', width: '80%' }} />
                    <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ padding: '10px', width: '80%' }} />
                    <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} style={{ padding: '10px', width: '80%' }} />
                    <textarea placeholder="Your Query" value={query} onChange={(e) => setQuery(e.target.value)} style={{ padding: '10px', width: '80%', height: '100px' }} />
                    <button onClick={handleSendFeedback} style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', borderRadius: '10px' }}>Send Feedback</button>
                </div>
            </div>
        </div>
    );
}

export default Contactus;
