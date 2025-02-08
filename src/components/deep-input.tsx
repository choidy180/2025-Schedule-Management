"use client";

import styled from "styled-components";

const Container = styled.div`
    width: auto;
    position: fixed;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);

    input {
        width: 1000px;
        max-width: calc(100vw - 28px);
        background-color: transparent;
        border-bottom: 4px solid white;
        outline: none;
        color: white;
        font-size: 2rem;
    }
`

const DeepInput = () => {
    return (
        <Container>
            <input type="text" placeholder="궁금한게 있으신가요?"/>
        </Container>
    )
}

export default DeepInput;