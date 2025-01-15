import ButtonComp from "./ButtonComp";

export default function RantPost () {
    return (
        <form className="flex flex-col gap-2 border-b-2 px-4 py-3">
            <div className="flex gap-4">
                {/* <ProfileImage></ProfileImage> */}
                <textarea className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none" placeholder="rant here"></textarea>
            </div>
            <ButtonComp>Raaant</ButtonComp>
        </form>
    )
}