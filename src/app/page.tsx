import GalleryComponent from "@/components/gallery";
import MainComponent from "../components/main";
import ResumeComponent from "../components/resume";
import ContentTitleComponent from "@/components/content-title";

export default function Home() {
    return (
        <>
            <title>PORTFOLIO</title>
            <MainComponent/>
            <ResumeComponent/>
            <GalleryComponent/>
            <ContentTitleComponent/>
        </>
    );
}
