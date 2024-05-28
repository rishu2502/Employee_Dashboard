import React from 'react';
import './App.css';

function App() {
    const employees = [
        { rank: 1, name: 'Rakesh Sharma', designation: 'UI/UX Designer', hours: '7(42)', changes: '+1.5 hrs' },
        { rank: 2, name: 'Ankita Thakur', designation: 'HR Recruiter', hours: '7(41)', changes: '-1.5 hrs' },
        { rank: 3, name: 'Sarah Yadav', designation: 'Product Manager', hours: '7(40)', changes: '+1.5 hrs' },
        { rank: 4, name: 'Harsha Shivhare', designation: 'Designer', hours: '7(37)', changes: '+1.5 hrs' },
        { rank: 5, name: 'Vanhi Rai', designation: 'Video Editor', hours: '7(37)', changes: '-1.5 hrs' },
        { rank: 6, name: 'Bhanu Sharma', designation: 'Business Analyst', hours: '7(32)', changes: '+1.5 hrs' },
        { rank: 7, name: 'Sunil Yadav', designation: 'Developer', hours: '7(24)', changes: '+1.5 hrs' },
        { rank: 8, name: 'Akash Roy', designation: 'Business Analyst', hours: '7(21)', changes: '-1.5 hrs' },
        { rank: 9, name: 'Rohit Soni', designation: 'Developer', hours: '7(20)', changes: '-1.5 hrs' },
        { rank: 10, name: 'Suraj Chauhan', designation: 'Developer', hours: '7(18)', changes: '+1.5 hrs' },
    ];

    return (
        <main className="main-content">
            <div className="header">
                <h1>Employees Activity Dashboard</h1>
                <div className="date-time">
                    <span>March 30, 2024</span><br />
                    <span>09:36 AM</span>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>No. of hours worked</th>
                        <th>Changes</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.rank}>
                            <td>{employee.rank}</td>
                            <td>{employee.name}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.hours}</td>
                            <td className={employee.changes.startsWith('+') ? 'positive' : 'negative'}>
                                {employee.changes}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="employee-of-the-month">
                <h3>Employee of the Month</h3>
                <img src="src/images/Rakeshsharma1.jpeg" alt="Rakesh Sharma" />
                <p>Rakesh Sharma<br />UI/UX Designer</p>
            </div>
        </main>
    );
}

export default App;
