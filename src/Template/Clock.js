import React from 'react';

import { useState } from "react";
import { useEffect } from "react";

const Clock = () => {

    const [time, setTime] = useState(new Date().toLocaleString());

    // function tick() {
    //     root.render(<Clock date={new Date()} />);
    // }



    // return(
    //     <>
    //         { time }
    //         { setTime(new Date().toLocaleString(), 1000) }
    //     </>
    // );


    
    useEffect(() => {
        const interval = setInterval(() => setTime(new Date().toLocaleString()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return(
            <>
                { time }
                {/* { setTime(new Date().toLocaleString(), 1000) } */}
                {/* { test() } */}
            </>
        );
}


export default Clock;