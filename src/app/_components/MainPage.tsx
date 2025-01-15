import Header from "./HeaderSection";
import RantPost from "./RantPost";

export default function MainPage() {
    return (
        <div className="border-[3px] min-h-screen flex-grow">
            <Header />
            <RantPost />
        </div>
    )
}