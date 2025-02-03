"use client";

import styled from "styled-components";
import ContentContainer from "./container";
import { DM_Serif_Text } from 'next/font/google';
import Image from "next/image";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 40px;

    .left {
        flex: 1;
        height: 100%;
        min-height: 1000px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;

        .first {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: start;

            .first-left {
                font-size: 1.2rem;
                line-height: 1.2rem;
                font-family: 'Paperlogy-4Regular';
                font-weight: 600;
                color: #eb4d4b;
            }
            .first-right {
                font-size: 1rem;
                line-height: 1rem;
                font-family: 'Paperlogy-4Regular';
                color: #1e3799;
                p {
                    margin-bottom: 8px;
                }
            }
        }
        .second {
            width: 100%;
            margin-top: 200px;
            .title {
                font-size: 3rem;
                font-family: 'Paperlogy-4Regular';
                color: #eb4d4b;
                transform: translateX(-3px);
            }
            .sub {
                font-size: 1.2rem;
                font-weight: 600;
                font-family: 'Paperlogy-4Regular';
                color: #eb4d4b;
            }
            .sub-text {
                font-size: 1.2rem;
                font-family: 'Paperlogy-4Regular';
                color: #eb4d4b;
            }
        }
        .third {
            position: absolute;
            left: 0;
            bottom: 0;
            font-size: 1rem;
            line-height: 1rem;
            font-family: 'Paperlogy-4Regular';
            color: #1e3799;
            
            p {
                margin-bottom: 10px;
            }
        }
    }
    .right {
        flex: 1.5;
        height: 1000px;
    }
`

const DMSerifText = DM_Serif_Text({
    subsets:['latin'],
    weight: ["400"],
});


const ContentPage1 = () => {
    return (
        <ContentContainer>
            <Container>
                <div className="left">
                    <div className="first">
                        <div className="first-left">
                            <p>RESORT</p>
                        </div>
                        <div className="first-right">
                            <p>3ds Max</p>
                            <p>3ds Max</p>
                            <p>3ds Max</p>
                            <p>3ds Max</p>
                        </div>
                    </div>
                    <div className="second">
                        <p className={`title ${DMSerifText.className}`}>PROJECT-1</p>
                        <p className="sub">RESORT | 2021</p>
                        <p className="sub-text">한적한 밤 산책하다 보면 어김없이 생각나는 얼굴 반짝이는 별을 모아 그리는 그런 사람</p>
                        <p className="sub-text">좁다란 길 향기를 채우는 가로등 빛 물든 진달래꽃이 향기를 그와 함께 맡으면 참 좋겠네</p>
                        <p></p>
                    </div>
                    <div className="third">
                        <p>보고 싶어라 그리운 그 얼굴 물로 그린 그림처럼 사라지네 보고 싶어라 오늘도 그 사람을 떠올리려 산책을 하네, 대기는 차갑게 감싸고 생생하게 생각나는 그때 안타까운 빛나던 시절 뒤로하고 가던 보고 싶어라 그리운 그 얼굴 물로 그린 그림처럼 사라지네 보고 싶어라 오늘도 그 사람을 떠올리려 산책을 하네</p>
                        <p>따뜻한 손 그리고 그 감촉 내가 쏙 들어앉아 있던 그 눈동자 그 마음 아무것도 바라지 않고 사랑을 주던 그가 보고 싶어지네</p>
                        <p>그리운 그 얼굴 물로 그린 그림처럼 사라지네 보고 싶어라 오늘도 그 사람을 떠올리려 산책을 하네 오늘도 산책을 하네 오늘도 산책을 하네</p>
                        <p>보고 싶어라 그리운 그 얼굴 물로 그린 그림처럼 사라지네 보고 싶어라 오늘도 그 사람을 떠올리려 산책을 하네, 대기는 차갑게 감싸고 생생하게 생각나는 그때 안타까운 빛나던 시절 뒤로하고 가던 보고 싶어라 그리운 그 얼굴 물로 그린 그림처럼 사라지네 보고 싶어라 오늘도 그 사람을 떠올리려 산책을 하네</p>
                        <p>따뜻한 손 그리고 그 감촉 내가 쏙 들어앉아 있던 그 눈동자 그 마음 아무것도 바라지 않고 사랑을 주던 그가 보고 싶어지네</p>
                        <p>그리운 그 얼굴 물로 그린 그림처럼 사라지네 보고 싶어라 오늘도 그 사람을 떠올리려 산책을 하네 오늘도 산책을 하네 오늘도 산책을 하네</p>
                    </div>
                </div>
                <div className="right">
                    <Image
                        src={'/images/rm255-mind-instgram-10.jpg'}
                        width={1000}
                        height={1000}
                        alt="..."
                    />
                </div>
            </Container>
        </ContentContainer>
    )
}

export default ContentPage1;