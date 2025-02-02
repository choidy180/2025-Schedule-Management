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
        .content-container {
            width: 100%;
            max-width: 1920px;
            min-height: 1000px;
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;
        }
    }
`

const ContentContainer = ({children} : Readonly<{children: React.ReactNode}>) => {
    return (
        <Container>
            <div className="wrapper">
                <div className="content-container">
                    {children}
                </div>
            </div>
        </Container>
    )
}

export default ContentContainer;