import React from 'react'
import { useState } from 'react';

function Home() {
    const [sequence, setSequence] = useState([]);

    const generateFibonacci = () => {
        const n = 10; 
        const fib = [0, 1];
        for (let i = 2; i < n; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        setSequence(fib);
    };

    return (
        
        <div>
            <div>
                <h1>hiiii welcommme</h1>
                 <p>Welcome to the Student System</p>
                 <p>This is the home page where you can find information about the system.</p>
                 <p>Use the navigation links to access different sections of the system.</p>
                 <p>For any issues, please contact the system administrator.</p>
             </div>
            <button onClick={generateFibonacci}>Generate Fibonacci Sequence</button>
            <ul>
                {sequence.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
        </div>
    );
}


export default Home;