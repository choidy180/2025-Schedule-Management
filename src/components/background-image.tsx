"use client";

import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: black;
    z-index: -1;
    position: fixed;
    left: 0;
    top: 0;
    .image-box {
        width: 100%;
        min-height: 100vh;
        filter: brightness(0.4);
        img {
            width: 100%;
            min-height: 100vh;
            object-fit: cover;
        }
    }
`

const BackGroundImageComponent = () => {
    return (
        <Container>
            <div className="image-box">
                <Image
                    src={'/images/default-wallpaper.jpg'}
                    width={1000}
                    height={1000}
                    alt="back-image"
                />
            </div>
        </Container>
    )
}


export default BackGroundImageComponent;