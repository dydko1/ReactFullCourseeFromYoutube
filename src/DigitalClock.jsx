import React, { useState, useEffect } from "react";

function DigitalClock() {
    return (
        <div className="clock-container">
            <div className="clock"></div>
            <h1>Digital Clock</h1>
            <h2>{new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default DigitalClock;