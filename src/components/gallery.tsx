"use client";

import styled from "styled-components";
import { DM_Serif_Text } from 'next/font/google';
import PageNumber from "@/common/page-number";

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
        .content-container {
            width: 100%;
            max-width: 1920px;
            min-height: 1000px;
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;
            h1.title {
                color: #1e3799;
                font-size: 5rem;
                line-height: 3.4rem;
                letter-spacing: -1px;
            }
            h2.title_sub {
                text-transform: uppercase;
                font-size: 1.2rem;
                line-height: 1.2rem;
                font-weight: 600;
                font-family: 'Paperlogy-4Regular';
                color: #eb4d4b;
                margin-top: 20px;
            }
            .content-box {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 40px;
                .box {
                    width: 340px;
                    min-height: 800px;
                    display: flex;
                    flex-direction: column;
                    justify-content: start;
                    align-items: start;
                    .numbering {
                        width: 100%;
                        text-align: right;
                        font-size: 1.2rem;
                        line-height: 1.2rem;
                        font-family: 'Paperlogy-4Regular';
                        color: #eb4d4b;
                        font-weight: 600;
                    }
                    .content-image-box {
                        width: 100%;
                        height: 500px;
                        margin-top: 10px;
                        border: 4px solid #eb4d4b;
                    }
                    .gallery-title {
                        width: 100%;
                        text-align: left;
                        font-size: 600;
                        color: #1e3799;
                        font-size: 1.1rem;
                        line-height: .9rem;
                        margin-top: 80px;
                        border-bottom: 1px solid #1e3799;

                        span {
                            position: absolute;
                            right: 0;
                            font-weight: 600;
                            font-size: 1.1rem;
                            line-height: .9rem;
                        }
                    }
                    .gallery-point {
                        width: 100%;
                        text-align: left;
                        color: #1e3799;
                        font-size: 1.1rem;
                        line-height: 1.1rem;
                        margin-top: 40px;

                        span {
                            position: absolute;
                            right: 0;
                            font-size: 1.1rem;
                            line-height: 1.1rem;
                        }
                    }
                }
                .box1 {

                }
                .box2 {

                }
                .box3 {

                }
                .box4 {

                }
            }
        }
    }
`

const DMSerifText = DM_Serif_Text({
    subsets:['latin'],
    weight: ["400"],
});

export default function GalleryComponent(){
    return (
        <>
            <Container>
                <div className="wrapper">
                    <div className="content-container">
                        <h1 className={`title ${DMSerifText.className}`}>GALLERY</h1>
                        <h2 className="title_sub">OF PROGRAMMING PROJECTS</h2>

                        <div className="content-box">
                            <div className="box box1">
                                <p className="numbering">01.</p>
                                <div className="content-image-box">

                                </div>
                                <p className="gallery-title">
                                    <b>GALLERY-CONTENT 1</b>
                                    <span>0</span>
                                </p>
                                <p className="gallery-point">
                                    GALLERY-POINT
                                    <span>5</span>
                                </p>
                                <p className="gallery-point">
                                    GALLERY-POINT
                                    <span>10</span>
                                </p>
                                <p className="gallery-point">
                                    GALLERY-POINT
                                    <span>15</span>
                                </p>
                                <p className="gallery-point">
                                    GALLERY-POINT
                                    <span>25</span>
                                </p>
                            </div>
                            <div className="box box2">
                                <p className="numbering">02.</p>
                                <div className="content-image-box">

                                </div>
                                <p className="gallery-title">
                                    <b>GALLERY-CONTENT 2</b>
                                    <span>0</span>
                                </p>
                                <p className="gallery-point">
                                    GALLERY-POINT
                                    <span>5</span>
                                </p>
                                <p className="gallery-point">
                                    GALLERY-POINT
                                    <span>10</span>
                                </p>
                                <p className="gallery-point">
                                    GALLERY-POINT
                                    <span>15</span>
                                </p>
                                <p className="gallery-point">
                                    GALLERY-POINT
                                    <span>25</span>
                                </p>
                            </div>
                            <div className="box box3">
                                <p className="numbering">03.</p>
                                <div className="content-image-box">

                                </div>
                                <p className="gallery-title">
                                    <b>GALLERY-CONTENT 3</b>
                                    <span>0</span>
                                </p>
                                <p className="gallery-point">
                                    GALLERY-POINT
                                    <span>5</span>
                                </p>
                                <p className="gallery-point">
                                    GALLERY-POINT
                                    <span>10</span>
                                </p>
                                <p className="gallery-point">
                                    GALLERY-POINT
                                    <span>15</span>
                                </p>
                                <p className="gallery-point">
                                    GALLERY-POINT
                                    <span>25</span>
                                </p>
                            </div>
                            <div className="box box4">
                                <p className="numbering">04.</p>
                                <div className="content-image-box">

                                </div>
                                <p className="gallery-title">
                                    <b>GALLERY-CONTENT 4</b>
                                    <span>0</span>
                                </p>
                                <p className="gallery-point">
                                    GALLERY-POINT
                                    <span>5</span>
                                </p>
                                <p className="gallery-point">
                                    GALLERY-POINT
                                    <span>10</span>
                                </p>
                                <p className="gallery-point">
                                    GALLERY-POINT
                                    <span>15</span>
                                </p>
                                <p className="gallery-point">
                                    GALLERY-POINT
                                    <span>25</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <PageNumber number={3}/>
                </div>
            </Container>
        </>
    )
}