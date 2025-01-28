'use client'
import { useSession } from "next-auth/react";
import ButtonComp from "./ButtonComp";
import ProfileImage from "./ProfileImage";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { api } from "~/trpc/react";

export default function RantPost() {
    const session = useSession();

    if (session.status !== "authenticated") return;

    return <RantForm />
}


function updateTextAreaSize(textArea?: HTMLTextAreaElement) {
    if (textArea == null) return
    textArea.style.height = "0";
    textArea.style.height = `${textArea.scrollHeight}px`
}

function RantForm() {
    const session = useSession();
    const [inputValue, setInputvalue] = useState("")
    const textAreaRef = useRef<HTMLTextAreaElement>();

    const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
        updateTextAreaSize(textArea)
        textAreaRef.current = textArea
    }, [])

    useEffect(() => {
        updateTextAreaSize(textAreaRef.current)
    }, [inputValue])

    if (session.status !== "authenticated") return null;
    
    const createPost = api.post.createProcedure.useMutation({onSuccess: (newTweet) => {
        setInputvalue("");
    }});

    function handlePostSubmit (e: FormEvent) {
        e.preventDefault();
        
        createPost.mutate({content: inputValue});
    }
    return (
        <form onSubmit={handlePostSubmit} className="flex flex-col gap-2 border-b-2 px-4 py-3">
            <div className="flex gap-4">
                <ProfileImage src={session.data.user.image} />
                <textarea
                    ref={inputRef}
                    style={{ height: 0 }}
                    value={inputValue}
                    onChange={(e) => setInputvalue(e.target.value)}
                    className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none" placeholder="rant here"></textarea>
            </div>
            <ButtonComp className="self-end">Raaant</ButtonComp>
        </form>
    )
}
