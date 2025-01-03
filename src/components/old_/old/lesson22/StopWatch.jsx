import React, { useState, useEffect, useRef } from "react";

function StopWatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current =
                setInterval(() => {
                    Date.now() - startTimeRef.current
                }, 10);
        }
        return () => { clearInterval(intervalIdRef.current) };
    }, [isRunning])


    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {

        //let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000* 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000 % 60));
        let miliSeconds = Math.floor((elapsedTime % 1000) / 10);

        return `${minutes}:${seconds}:${miliSeconds}`;
    }

    // there is a problem here
    return (<>
        <div className="stopwatch"> My Stop Watch
            <div className="display">{formatTime()}</div>
            <div className="controls">
            <button onClick={start} className="start-button">Start</button>
            <button onClick={stop} className="stop-button">Stop</button>
            <button onClick={reset} className="reset-button">Reset</button>
        </div></div>
    </>
    );
}

export default StopWatch;