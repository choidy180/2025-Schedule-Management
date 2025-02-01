"use client";
import PageNumber from "@/common/page-number";
import Image from "next/image";
import styled from "styled-components";

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

            .img-box {
                width: 440px;
                height: 600px;

                img {
                    height: 100%;
                    object-fit: cover;
                }
            }
            
        }
    }
`

export default function ContentTitleComponent(){
    return (
        <>
             <Container>
                <div className="wrapper">
                    <div className="content-image-box">
                        <div className="img-box">
                            <Image
                                src={`/images/7fad6c52-65a5-4889-9a61-fcbf68f68a82.jpg`}
                                width={550}
                                height={550}
                                alt="..."
                            />
                        </div>
                    </div>
                </div>
                <PageNumber number={4}/>
             </Container>
        </>
    )
}