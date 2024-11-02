/*Create a component called CountdownTimer.
Add an input field to accept the number of seconds for the countdown.
Use a useRef to store the interval ID (so it doesn’t reset on re-renders).
When the "Start Timer" button is clicked, start the countdown.
Add a "Stop Timer" button to stop the countdown before it reaches zero.
Display the countdown number on the screen.
Hint:
Use setInterval() to start the countdown.
Use clearInterval() with useRef to stop the countdown.
The interval should update the state (which will be the number of seconds left). */

import React, { useState, useRef } from 'react';

const [seconds, setSeconds] = useState(0);  
const [timeLeft, setTimeLeft] = useState(0);