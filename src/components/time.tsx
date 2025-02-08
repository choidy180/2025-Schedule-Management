"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    font-size: 6rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: white;
`

const TimeText = () => {
    const [time, setTime] = useState<string | null>(null);
    useEffect(()=> {
        const interval = setInterval(()=> {
            setTime(new Date().toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }));
        }, 1000);

        return () => clearInterval(interval);
    },[]);
    return (
        <Container>
            {time}
        </Container>
    )
}

export default TimeText;