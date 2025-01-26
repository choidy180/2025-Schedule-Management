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

        .content-container {
            width: 100%;
            max-width: 1920px;
            height: 1000px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .box1 {
                flex: 1.5;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: start;
                align-items: start;

                .profile_box {
                    width: calc(100% - 60px);
                    height: 440px;
                    border: 20px solid #1e3799;

                    img {
                        height: 100%;
                        object-fit: cover;
                    }
                }
                .sns_box {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: start;
                    align-items: start;
                    inline-size: 200px;
                    overflow-wrap: break-word;
                    .link {
                        width: 200px;
                        color: #1e3799;
                        font-family: 'Paperlogy-4Regular';
                    }
                    img {
                        margin-top: 10px;
                        cursor: pointer;
                    }
                    .instar {
                        color: #eb4d4b;
                        margin-top: 10px;
                        font-family: 'Paperlogy-6SemiBold';
                    }
                }
            }
            .box2 {
                flex: 2;
                height: 100%;
                padding: 20px;
                background-color: #c7c7ff;
            }
            .box3 {
                flex: 1.5;
                height: 100%;
                padding: 20px;
                background-color: #ffd1d1;
            }
            .box4 {
                flex: 2;
                height: 100%;
                padding: 20px;
                background-color: #c7c7ff;
            }
        }
    }
`

export default function ResumeComponent(){
    return (
        <>
            <Container>
                <div className="wrapper">
                    <div className="content-container">
                        <div className="box1">
                            <div className="profile_box">
                                <Image
                                    src={'/images/7888760148_2518140_c8238e05ca08a9bcebd2240cc237e7cc.jpg'}
                                    width={800}
                                    height={800}
                                    alt="..."
                                />
                            </div>

                            <div className="sns_box">
                                <p className="link">https://www.instagram.com/min_tt00ng/</p>
                                <Image
                                    src={'/images/qrcode_163770523_87663380f8327143f990008f2b1b4020.png'}
                                    width={160}
                                    height={160}
                                    alt="..."
                                    onClick={()=> window.open(`https://www.instagram.com/min_tt00ng/`)}
                                />
                                <p className="instar">INSTARGRAM</p>
                            </div>
                            
                        </div>
                        <div className="box2">
                            
                        </div>
                        <div className="box3">
                            
                        </div>
                        <div className="box4">
                            
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}