"use client";
import PageNumber from "@/common/page-number";
import Image from "next/image";
import styled from "styled-components";
import { DM_Serif_Text } from 'next/font/google';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    .wrapper {
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url('images/wallpaperflare.com_wallpaper.jpg');
        background-size: cover;
        background-position: center;
        .content-image-box {
            width: 100%;
            max-width: 1920px;
            min-height: 1000px;
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;

            .content-numbering {
                color: #eb4d4b;
                font-weight: 600;
                font-size: 1.4rem;
                margin-bottom: 10px;
            }
            .img-box {
                width: 440px;
                height: 600px;
                border: 4px solid #eb4d5b;

                img {
                    height: 100%;
                    object-fit: cover;
                }
                &::before {
                    content: '';
                    position: absolute;
                    left: -2px;
                    top: -2px;
                    right: -2px;
                    bottom: -2px;
                    background-color: red;
                    z-index: 0;
                    filter: blur(20px);
                }
                &::before,
                &::after {
                    background: linear-gradient(235deg, #eb4d4b, #1e3799 , #e9e9e9);
                }
            }
            .content-title {
                color: #1e3799;
                font-size: 6rem;
                line-height: 5rem;
                margin-top: 24px;
                text-align: center;
            }

            .content-year {
                font-size: 1.4rem;
                color: #eb4d4b;
                margin-top: 20px;
            }
        }
    }
`

const DMSerifText = DM_Serif_Text({
    subsets:['latin'],
    weight: ["400"],
});

export default function ContentTitleComponent(){
    return (
        <>
             <Container>
                <div className="wrapper">
                    <div className="content-image-box">
                        <p className="content-numbering">01.</p>
                        <div className="img-box">
                            <Image
                                src={`/images/7fad6c52-65a5-4889-9a61-fcbf68f68a82.jpg`}
                                width={550}
                                height={550}
                                alt="..."
                            />
                        </div>
                        <p className={`content-title ${DMSerifText.className}`}>CONTENT<br/>TITLE-1</p>
                        <p className="content-year">| 0000 - 9999 |</p>
                    </div>
                </div>
                <PageNumber number={4}/>
             </Container>
        </>
    )
}