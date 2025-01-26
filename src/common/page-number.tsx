import styled from "styled-components"

const Container = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 40px;
    font-size: 1.4rem;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    .bar {
        height: 4px;
        width: 30px;
        background-color: #1e3799;
    }
`

interface NumberInterface {
    number: number;
}

export default function PageNumber(prop:NumberInterface){
    return (
        <Container>
            <div className="bar"/>
            <span>{prop.number}</span>
            <div className="bar"/>
        </Container>
    )
}