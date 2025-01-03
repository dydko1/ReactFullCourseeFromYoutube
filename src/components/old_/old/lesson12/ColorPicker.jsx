import React, { useState } from "react";

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = (e) => {
         setColor(e.target.value)
    }

    return (
        <div className="color-picker-container">
            <h1>Color picker</h1>
            <div className="color-display" style={{ backgroundColor: color }}>
                <p>Select color: {color}</p>
            </div>
            <label>Select a color:</label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    )
}
export default ColorPicker;