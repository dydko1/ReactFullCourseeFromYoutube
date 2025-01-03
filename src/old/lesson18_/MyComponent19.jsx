import React, { useEffect, useState } from 'react';
function MyComonent19() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("!! Event lister added !!");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("!! Event lister removed !!");
        }

    },[]);

    useEffect(() => {
        document.title = `Window Width: ${width}px x ${height}px`;
    },[width, height]);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    return (
        <>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </>
    );
}

export default MyComonent19;