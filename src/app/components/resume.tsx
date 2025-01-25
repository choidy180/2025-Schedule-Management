"use client";

import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
;
    .wrapper {
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url('images/wallpaperflare.com_wallpaper.jpg');
        background-size: cover;
        background-position: center;
    }
`

export default function ResumeComponent(){
    return (
        <>
            <Container>
                <div className="wrapper">

                </div>
            </Container>
        </>
    )
}