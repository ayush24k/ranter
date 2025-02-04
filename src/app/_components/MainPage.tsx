import Header from "./HeaderSection";
import InfinitePostList from "./InfinitePostList";
import InfiniPostList from "./InfinitePostList";
import RantPost from "./RantPost";

export default function MainPage() {
    return (
        <div className="border-[3px] min-h-screen flex-grow">
            <Header />
            <RantPost />
            <RecentTweets />
        </div>
    )
}

function RecentTweets() {
    const tweets = []

    return (
        <InfinitePostList tweets={tweets} />
    )
}
