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
        .box {
            width: 600px;
            max-width: calc(100vw - 40px);
            height: 600px;
            max-height: calc(100vw - 40px);
            img {
                object-fit: cover;
                cursor: pointer;
                transition: all ease-in-out .3s;
                &:hover {
                    transform: scale(1.1);
                }
            }

            .main_text_box {
                display: flex;
                flex-direction: column;
                justify-content: start;
                align-items: start;
                color: #1e3799;
                position: absolute;
                top: -10rem;
                width: 600px;
                max-width: calc(100vw - 40px);

                .year {
                    font-size: 2rem;
                    font-family: 'Paperlogy-4Regular';
                    margin-left: 8px;
                }
                .title {
                    font-size: 10vw;
                    line-height: 7rem;
                    font-family: "Smooch Sans", serif;
                    font-weight: 100; 
                    letter-spacing: .14rem;
                }
                .designer {
                    font-size: 1.83vw;
                    line-height: 2rem;
                    letter-spacing: .38rem;
                    word-spacing: .4rem;
                    margin-left: 8px;
                    color: #eb4d4b;
                }
            }
        }
        .page_number {
            position: absolute;
            right: 0;
            top: 10vh;
            font-size: 2rem;
            display: flex;
            justify-content: start;
            align-items: center;
            span {
                margin-right: 4px;
            }
            .bar {
                height: 6px;
                width: 40px;
                background-color: #1e3799;
            }
        }
    }
`

export default function MainComponent(){
    return (
        <>
            <Container>
                <div className="wrapper">
                    <div className="box">
                        <Image
                            src={'/images/example_images.png'}
                            width={600}
                            height={600}
                            alt="..."
                        />
                        <div className="main_text_box">
                            <p className="year">1999-2025</p>
                            <p className="title">PORTFOLIO</p>
                            <p className="designer">an advertising designer</p>
                        </div>
                    </div>
                    <div className="page_number">
                        <span>1</span>
                        <div className="bar"/>
                    </div>
                </div>
            </Container>
        </>
    )
}