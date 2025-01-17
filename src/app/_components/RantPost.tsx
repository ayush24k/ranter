'use client'
import { useSession } from "next-auth/react";
import ButtonComp from "./ButtonComp";
import ProfileImage from "./ProfileImage";

export default function RantPost () {
    const session = useSession();
    
    if (session.status !== "authenticated") return;

    return (
        <form className="flex flex-col gap-2 border-b-2 px-4 py-3">
            <div className="flex gap-4">
                <ProfileImage src={session.data.user.image} />
                <textarea className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none" placeholder="rant here"></textarea>
            </div>
            <ButtonComp className="self-end">Raaant</ButtonComp>
        </form>
    )
}