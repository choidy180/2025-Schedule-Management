"use client";

import Image from "next/image";
import styled from "styled-components";
import { DM_Serif_Text } from 'next/font/google';
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsLine } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { SiAdobephotoshop } from "react-icons/si";

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
                    width: calc(100% - 100px);
                    height: 380px;
                    border: 14px solid #1e3799;

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

                h1.title {
                    color: #1e3799;
                    font-size: 5rem;
                    line-height: 3.4rem;
                }
                .intro_title {
                    font-size: 1.6rem;
                    line-height: 1.6rem;
                    font-family: 'Paperlogy-4Regular';
                    color: #eb4d4b;
                    margin-top: 20px;
                }
                .intro_text {
                    line-height: 1.6rem;
                    font-size: 1.2rem;
                    color: #1e3799;
                    margin-top: 40px;
                }
                .achievement {
                    text-transform: uppercase;
                    font-size: 1.6rem;
                    line-height: 1.6rem;
                    font-family: 'Paperlogy-4Regular';
                    color: #eb4d4b;
                    margin-top: 80px;
                }
                .ach_text {
                    max-width: 480px;
                    color: #1e3799;
                    font-size: 1rem;
                    line-height: 1.6rem;
                    margin-top: 40px;
                }
                .my_self {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    max-width: 480px;
                    color: #1e3799;
                    font-size: 1rem;
                    line-height: 1.6rem;
                    font-style: italic;
                }
            }
            .box3 {
                flex: 1.5;
                height: 100%;
                padding: 20px;

                h1.title {
                    color: #1e3799;
                    font-size: 5rem;
                    line-height: 3.4rem;
                }
                .intro_title {
                    font-size: 1.6rem;
                    line-height: 1.6rem;
                    font-family: 'Paperlogy-4Regular';
                    color: #eb4d4b;
                    text-transform: uppercase;

                    &.mt {
                        margin-top: 80px;
                    }
                }
                
                .education_content {
                    display: flex;
                    flex-direction: column;
                    justify-content: start;
                    align-items: start;
                    padding-top: 40px;
                    color: #1e3799;
                    .year {
                        width: 100%;
                        max-width: 360px;
                        text-align: right;
                        span {
                            border: 1px solid #1e3799;
                            border-top: 0px;
                            border-bottom: 0px;
                            padding: 0 10px;
                        }
                    }
                    .title {
                        font-weight: 600;
                    }
                }
                .icon_box {
                    margin-top: 40px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: start;
                    align-items: start;
                    gap: 10px;
                    svg {
                        color: #1e3799 !important;
                        width: 60px;
                        height: 60px;
                    }
                }
                .str_text {
                    max-width: 480px;
                    color: #1e3799;
                    font-size: 1rem;
                    line-height: 1.6rem;
                    margin-top: 40px;
                }
                .my_self {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    max-width: 480px;
                    color: #1e3799;
                    font-size: 1rem;
                    line-height: 1.6rem;
                    font-style: italic;
                    &.ml20 {
                        margin-left: 20px;
                    }
                }
            }
            .box4 {
                flex: 2;
                height: 100%;
                padding: 20px;
                h1.title {
                    color: #1e3799;
                    font-size: 5rem;
                    line-height: 3.4rem;
                }
                .intro_title {
                    font-size: 1.6rem;
                    line-height: 1.6rem;
                    font-family: 'Paperlogy-4Regular';
                    color: #eb4d4b;
                    text-transform: uppercase;

                    &.mt {
                        margin-top: 80px;
                    }
                }
                
                .head {
                    margin-top: 40px;
                    color: #1e3799;
                    span {
                        position: absolute;
                        right: 0;
                        border: 1px solid #1e3799;
                        border-top: 0px;
                        border-bottom: 0px;
                        padding: 0 10px;
                    }

                    .color {
                        color: #eb4d4b;
                    }
                }
                .content_text {
                    max-width: 480px;
                    color: #1e3799;
                    font-size: 1rem;
                    line-height: 1.4rem;
                    &.mt {
                        margin-top: 40px;
                    }
                    &.link {
                        cursor: pointer;
                        &:hover{
                            text-decoration: underline
                        };
                    }
                }
                .my_self {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    max-width: 480px;
                    color: #1e3799;
                    font-size: 1rem;
                    line-height: 1.6rem;
                    font-style: italic;

                    &.ml20 {
                        margin-left: 20px;
                    }
                }
            }
        }
    }
`

const DmSerifText = DM_Serif_Text({
    subsets:['latin'],
    weight: ["400"],
});

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
                            <h1 className={`title ${DmSerifText.className}`}>RESUME</h1>
                            <p className="intro_title">Please write your introduction</p>
                            <p className="intro_text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, corporis, laborum aspernatur doloribus saepe quae voluptas velit dolorem accusantium alias neque veritatis expedita vero consectetur officiis! Vero necessitatibus sint labore.</p>

                            <h1 className="achievement">achievement</h1>
                            <p className="ach_text">
                                <b>Top 1</b> It received the highest ratings in the team for projects using React.
                            </p>
                            <p className="ach_text">
                                <b>Winner</b> It ranked first in the web development competition with a project that utilizes React and API integration.
                            </p>
                            <p className="ach_text">
                                <b>Achievement</b> Utilizing the latest technology, we have achieved efficient web application development.
                            </p>
                            <p className="ach_text">
                                <b>Development</b> Through various projects, we have steadily developed problem-solving skills and technical expertise.
                            </p>

                            <p className="my_self">Min Seok, Republic of Korea</p>
                        </div>
                        <div className="box3">
                            <h1 className={`title ${DmSerifText.className}`}>&nbsp;</h1>
                            <p className="intro_title">Education</p>
                            
                            <div className="education_content">
                                <p className="year"><span>2012-2014</span></p>
                                <p className="title">Gimhae Yulha High School</p>
                                <p>{`>`} the vice president of the school</p>
                                <p>{`>`} a science and engineering graduate</p>
                            </div>

                            <div className="education_content">
                                <p className="year"><span>2014-2022</span></p>
                                <p className="title">Dongseo University</p>
                                <p>{`>`} Graduated from Computer Engineering</p>
                                <p>{`>`} credit 3.8 / 4.5</p>
                            </div>

                            <p className="intro_title mt">STACK</p>
                            <div className="icon_box">
                                <IoLogoJavascript/>
                                <FaReact />
                                <RiNextjsLine />
                                <DiMysql/>
                                <IoLogoFirebase />
                                <SiAdobephotoshop />
                                <FaCss3Alt />
                            </div>

                            <p className="intro_title mt">STRENGTHS</p>
                            <p className="str_text">
                                We design and actually develop web structures, and try to develop highly scalable in the long run.
                            </p>
                            <p className="my_self ml20">+82 010 1234 5678</p>
                        </div>
                        <div className="box4">
                            <h1 className={`title ${DmSerifText.className}`}>&nbsp;</h1>
                            <p className="intro_title">ACTIVITES</p>
                            <div className="head"><b>Busan DX Challenge 2nd</b><span>07 / 2019</span></div>
                            <p className="content_text">Won 2nd place in the college student hacking contest hosted by Busan City</p>

                            <div className="head"><b>Busan DX Challenge 2nd</b><span>08 / 2021</span></div>
                            <p className="content_text">Winner of the Red Dot Design Awards, one of the world's top three design awards</p>
                            <p className="content_text link" onClick={()=> window.open(`https://www.dongseo.ac.kr/kr/index.php?pCode=MN2000192&mode=view&idx=86082`)}>{`> `}Go to Link</p>

                            <p className="intro_title mt">Education</p>
                            <div className="head"><b className="color">DN LAB Research Worker</b><span>10/2019 - 2022/02</span></div>
                            <p className="content_text"><b>When I was a freshman in college, I entered the DN lab and started studying development as a researcher to build up my capabilities</b></p>
                            <div className="head"><b className="color">BLUEVISOR systems Programmer</b><span>12/2020 - 2021/09</span></div>
                            <p className="content_text"><b>Design and develop a remote interview system using AI to get a job early before graduation in the fourth grade</b></p>
                            <div className="head"><b className="color">MUSINSA Programmer</b><span>02/2022 - 2025/02</span></div>
                            <p className="content_text"><b>Musinsa's development team planned and developed web services and developed new services</b></p>

                            <p className="my_self ml20">choidy180@naver.com</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}