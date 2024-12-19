import React, { useState, useEffect } from 'react';

function Counter({ initialCount }) {
    const [count, setCounter] = useState(initialCount);  // Tracks the number of tasks completed
    const [goal, setGoal] = useState(5);  // Default goal is a number (5)
    const [goalMessage, setGoalMessage] = useState(''); // For motivational message
    const [isFirstVisit, setIsFirstVisit] = useState(true); // Track first visit
    const [customGoal, setCustomGoal] = useState(''); // For custom goal input

    // A goal list with predefined tasks and motivational messages
    const goalMessages = {
        'Do Exercise': "Great job! Regular exercise is key to staying healthy.",
        'Eat Healthy': "Awesome! Eating healthy gives you energy and vitality.",
        'Meditate': "Well done! Meditation helps calm the mind and reduce stress.",
        'Read a Book': "Fantastic! Reading increases knowledge and expands your mind.",
        'Learn Something New': "Incredible! Every new skill takes you one step further.",
        'Stay Hydrated': "Good choice! Staying hydrated keeps you energized and focused.",
    };

    // Update the goal message based on the selected goal
    const updateGoalMessage = (newGoal) => {
        setGoalMessage(goalMessages[newGoal] || "Keep going, you're doing great!");
    };

    // Handle task completion by incrementing the task count
    const increment = () => {
        setCounter(prev => prev + 1); // Each button press increments the task completion count
    };

    const decrement = () => setCounter(prev => prev - 1);
    const restart = () => setCounter(0);

    // Handle goal change (either a predefined goal or custom goal)
    const handleGoalChange = (newGoal) => {
        // If it's a predefined goal, we'll treat it as a default task goal number (e.g., 5 tasks for "Do Exercise")
        const predefinedGoals = {
            'Do Exercise': 5,
            'Eat Healthy': 5,
            'Meditate': 5,
            'Read a Book': 5,
            'Learn Something New': 5,
            'Stay Hydrated': 5,
        };

        const newGoalValue = predefinedGoals[newGoal] || newGoal; // Default to predefined goal or custom number
        setGoal(newGoalValue);
        updateGoalMessage(newGoal); // Update motivational message based on goal
    };

    // Handle custom goal input change
    const handleCustomGoalChange = (event) => {
        setCustomGoal(event.target.value);  // Update the custom goal text
    };

    // Handle custom goal submit (sets the goal)
    const handleCustomGoalSubmit = () => {
        const parsedGoal = parseInt(customGoal, 10);
        if (!isNaN(parsedGoal) && parsedGoal > 0) {
            setGoal(parsedGoal); // Set the custom goal if it's a valid number
            updateGoalMessage(parsedGoal); // Update message for the custom goal
            setCustomGoal(''); // Clear the input field after setting the goal
        } else {
            alert("Please enter a valid goal number");
        }
    };

    // Close the hint on first visit
    const closeHint = () => {
        setIsFirstVisit(false);
    };

    // Display hint only if it's the first visit
    useEffect(() => {
        if (isFirstVisit) {
            // Optionally hide the hint after 10 seconds
            const timeout = setTimeout(() => setIsFirstVisit(false), 10000);
            return () => clearTimeout(timeout); // Clean up timeout
        }
    }, [isFirstVisit]);

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
            {/* Display hint message only if it's the first visit */}
            {isFirstVisit && (
                <div className="hint-message" style={{
                    padding: '10px',
                    backgroundColor: '#f0f8ff',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    marginBottom: '20px'
                }}>
                    <p><strong>Welcome to the Goal Tracker!</strong></p>
                    <p>1. Select a goal (like "Do Exercise") from the list below.</p>
                    <p>2. Click "Task Completed" (Increment) when you complete the task.</p>
                    <p>3. Keep track of your progress and stay motivated!</p>
                    <button onClick={closeHint} style={{
                        padding: '5px 10px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginTop: '10px'
                    }}>
                        Got it! Let's start.
                    </button>
                </div>
            )}

            <h3 data-testid="count" style={{ fontSize: '2rem', color: '#333' }}>{count}</h3>
            <p style={{ color: count >= goal ? 'green' : 'black', fontWeight: 'bold' }}>
                {count >= goal ? 'Goal reached!' : `Goal: ${goal}`}
            </p>

            {/* Display motivational message based on goal */}
            <p style={{ fontStyle: 'italic', color: '#555' }}>{goalMessage}</p>

            {/* Display the predefined goals */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
                {['Do Exercise', 'Eat Healthy', 'Meditate', 'Read a Book', 'Learn Something New', 'Stay Hydrated'].map((option) => (
                    <div
                        key={option}
                        onClick={() => handleGoalChange(option)}
                        style={{
                            padding: '15px',
                            margin: '10px',
                            cursor: 'pointer',
                            borderRadius: '8px',
                            backgroundColor: goal === option ? '#4CAF50' : '#f1f1f1',
                            color: goal === option ? 'white' : '#333',
                            fontSize: '1.2rem',
                            boxShadow: goal === option ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        {option}
                    </div>
                ))}
            </div>

            {/* Custom Goal Input */}
            <div style={{ marginTop: '20px' }}>
                <input
                    type="number"
                    placeholder="Enter your custom goal (e.g., 5)"
                    value={customGoal}
                    onChange={handleCustomGoalChange}
                    style={{
                        padding: '10px',
                        fontSize: '1rem',
                        width: '80%',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        marginBottom: '10px',
                    }}
                />
                <button
                    onClick={handleCustomGoalSubmit}
                    style={buttonStyle}
                >
                    Set Custom Goal
                </button>
            </div>

            {/* Action Buttons */}
            <div style={{ marginTop: '20px' }}>
                <button
                    data-testid="increment"
                    onClick={increment}
                    style={buttonStyle}
                >
                    Task Completed (Increment)
                </button>
                <button
                    data-testid="decrement"
                    onClick={decrement}
                    style={buttonStyle}
                >
                    Decrement
                </button>
                <button
                    data-testid="restart"
                    onClick={restart}
                    style={buttonStyle}
                >
                    Restart
                </button>
            </div>
        </div>
    );
}

// Button styles for consistency
const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    margin: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
};

export default Counter;
