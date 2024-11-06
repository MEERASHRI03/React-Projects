// StudentContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const StudentContext = createContext();


// Function to get the current time in IST
const getISTTime = () => {
    const date = new Date();
    const offset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
    const istTime = new Date(date.getTime() + offset);
    return istTime.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
};

const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/students')
            .then(response => setStudents(response.data))
            .catch(error => console.error("Error fetching student data:", error));
    }, []);

    const addStudent = (newStudent) => {
        const studentWithTimestamp = {
            ...newStudent,
            updatedTime: getISTTime() // Add timestamp in IST
        };
        axios.post('http://localhost:3000/students', studentWithTimestamp)
            .then(response => {
                setStudents([...students, response.data]);
            })
            .catch(error => console.error("Error adding student:", error));
    };

    const removeStudent = (id) => {
        axios.delete(`http://localhost:3000/students/${id}`)
            .then(() => {
                setStudents(students.filter(student => student.id !== id));
            })
            .catch(error => console.error("Error removing student:", error));
    };

    const updateStudent = (id, updatedStudent) => {
        const studentWithTimestamp = {
            ...updatedStudent,
            updatedTime: getISTTime() // Add timestamp on update in IST
        };
        axios.put(`http://localhost:3000/students/${id}`, studentWithTimestamp)
            .then(response => {
                setStudents(students.map(student => 
                    student.id === id ? response.data : student
                ));
            })
            .catch(error => console.error("Error updating student:", error));
    };

    return (
        <StudentContext.Provider value={{ students, addStudent, removeStudent, updateStudent }}>
            {children}
        </StudentContext.Provider>
    );
};

export default StudentProvider;

// StudentManagementPage.jsx
import React, { useState, useContext } from 'react';
import { StudentContext } from './StudentContext';

const StudentManagementPage = () => {
    const { students, addStudent, removeStudent, updateStudent } = useContext(StudentContext);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [classLevel, setClassLevel] = useState('');
    const [department, setDepartment] = useState('');
    const [year, setYear] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editingStudentId, setEditingStudentId] = useState(null);

    const handleAddOrUpdateStudent = () => {
        if (editMode) {
            updateStudent(editingStudentId, { name, age, classLevel, department, year });
            setEditMode(false);
            setEditingStudentId(null);
        } else {
            const newStudent = { name, age, classLevel, department, year };
            addStudent(newStudent);
        }

        setName('');
        setAge('');
        setClassLevel('');
        setDepartment('');
        setYear('');
    };

    const handleEditStudent = (student) => {
        setName(student.name);
        setAge(student.age);
        setClassLevel(student.classLevel);
        setDepartment(student.department);
        setYear(student.year);
        setEditMode(true);
        setEditingStudentId(student.id);
    };

    return (
        <div id="main" style={{ display: 'flex', flexDirection: 'column', backgroundImage: "url('https://campuscloud.pk/wp-content/uploads/2023/03/choose-school-management-system-2048x1366.jpeg')", backgroundSize: 'cover', backgroundPosition: 'left', height: 'auto' }}>
            <header>
                <div style={{ display: 'flex' }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOTzrqDnayaR8E0jam3k2Y6WhVg8Vme9MX2UnQ7Pr30818YbTzL1ZhnokqIRukFFPuN0&usqp=CAU" style={{height:'45px',width:'45px',borderRadius:'10px',paddingTop:'15px',paddingLeft:'10px'}}></img>
                    <h2 style={{ paddingLeft: '20px', display: 'flex', color: 'black' }}><b><i>AcademiaTracker</i></b></h2>
                    <a href="Homepageproject" style={{paddingTop:'20px',paddingRight:'20px',paddingLeft:'450px',color:'white'}}>Home</a>
           <a href="Homepageproject" style={{paddingTop:'20px',paddingRight:'20px',color:'white'}}>About us</a>
           <a href="StudentManagementPage" style={{paddingTop:'20px',paddingRight:'20px',color:'white'}}>Create Profile</a>
           <a href="aboutus.js" style={{paddingTop:'20px',paddingRight:'20px',color:'white'}}>Users</a>
           <a href="aboutus.js" style={{paddingTop:'20px',paddingRight:'20px',color:'white'}}>Generate sheets</a>
           <a href="Contactus" style={{paddingTop:'20px',paddingRight:'20px',color:'white'}}>Contact& Feedback</a> 
           <div style={{paddingRight:'15px',paddingTop:'19px'}}>
           <a href="Signinpage" style={{color:'white'}}>Login Page</a>
            </div>  
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Eo_circle_deep-purple_white_letter-m.svg/480px-Eo_circle_deep-purple_white_letter-m.svg.png' alt='myImage' style={{height:'50px',paddingTop:'20px',paddingRight:'20px'}}></img>
                </div>
            </header>
            <div id='one' style={{ paddingTop: '40px', paddingLeft: '70px', paddingRight: '70px' }}>
                <div style={{ alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.5)', height: '250px', borderRadius: '20px' }}>
                    <h2 style={{ color: 'black', paddingTop: '30px', textAlign: 'center' }}>Student Management</h2>
                    <div style={{ textAlign: 'center' }}>
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={{ height: '20px' }} />&nbsp;&nbsp;
                        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} style={{ height: '20px' }} />&nbsp;&nbsp;
                        <input type="text" placeholder="Class Level" value={classLevel} onChange={(e) => setClassLevel(e.target.value)} style={{ height: '20px' }} />&nbsp;&nbsp;
                        <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} style={{ height: '20px' }} />&nbsp;&nbsp;
                        <input type="text" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} style={{ height: '20px' }} />&nbsp;&nbsp;
                        <button onClick={handleAddOrUpdateStudent} style={{ backgroundColor: 'blue', color: 'whitesmoke', borderBlockColor: 'blue', borderRadius: '10px', height: '40px', width: '100px' }}>
                            {editMode ? 'Update Student' : 'Add Student'}
                        </button>
                    </div>
                </div>
            </div>
            <div id='two' style={{ paddingTop: '80px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.5)', padding: '20px', borderRadius: '20px', height: 'auto' }}>
                    <h3>Existing Students:</h3>
                    <table style={{ width: '80%', textAlign: 'center', backgroundColor: 'white', borderCollapse: 'collapse', border: '1px solid black', borderRadius: '10px' }}>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '10px' }}>Name</th>
                                <th style={{ border: '1px solid black', padding: '10px' }}>Age</th>
                                <th style={{ border: '1px solid black', padding: '10px' }}>Class Level</th>
                                <th style={{ border: '1px solid black', padding: '10px' }}>Department</th>
                                <th style={{ border: '1px solid black', padding: '10px' }}>Year</th>
                                <th style={{ border: '1px solid black', padding: '10px' }}>Updated Time (IST)</th>
                                <th style={{ border: '1px solid black', padding: '10px' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id} style={{ borderBottom: '1px solid black' }}>
                                    <td style={{ border: '1px solid black', padding: '10px' }}>{student.name}</td>
                                    <td style={{ border: '1px solid black', padding: '10px' }}>{student.age}</td>
                                    <td style={{ border: '1px solid black', padding: '10px' }}>{student.classLevel}</td>
                                    <td style={{ border: '1px solid black', padding: '10px' }}>{student.department}</td>
                                    <td style={{ border: '1px solid black', padding: '10px' }}>{student.year}</td>
                                    <td style={{ border: '1px solid black', padding: '10px' }}>{student.updatedTime}</td>
                                    <td>
                                        <button onClick={() => handleEditStudent(student)} style={{ marginRight: '10px', backgroundColor: 'orange', color: 'white', borderRadius: '5px' }}>Edit</button>
                                        <button onClick={() => removeStudent(student.id)} style={{ backgroundColor: 'red', color: 'whitesmoke', borderRadius: '5px' }}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentManagementPage;


