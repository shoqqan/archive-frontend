import React, {useState} from 'react';
import {Input} from "@/shared/ui/input.tsx";
import {Message} from "@/shared/ui/message.tsx";
import {useUnit} from "effector-react/effector-react.umd";
import {$chat, createMessageFx} from "@/pages/chat/model.ts";
import {MessageSkeletons} from "@/shared/ui/messageSkeletons.tsx";

import {useTranslation} from "react-i18next";


export const Assistant = () => {
    const {isChatLoading, history, chatId} = useUnit($chat)
    const {t, ready} = useTranslation();
    const [text, setText] = useState<string>('')
    return (
        <div
            className={'w-[45%] overflow-y-scroll relative bg-customlightgray h-full flex flex-col gap-y-5 rounded-xl border-solid border-gray-500 px-5 pt-5 xl:hidden'}>
            {
                !isChatLoading &&
                history.map((message) => (
                    <Message content={message.content} isUser={message.is_user} key={message.created_at}/>
                ))
            }
            {
                isChatLoading &&
                <MessageSkeletons/>
            }
            <div className={'absolute w-full flex justify-center items-center bottom-0 left-0 bg-white  rounded-lg'}>
                <Input className={'text-black placeholder-black'}
                       value={text}
                       onChange={(e) => setText(e.target.value)}
                       onKeyUp={(e) => {
                           if (e.key === 'Enter') {
                               if (text.trim() !== '') {
                                   createMessageFx({chat_id: chatId, content: text})
                               }
                           }
                       }}
                       placeholder={t("Input_chat_placeholder")}/>
                <div className={"mr-5"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-send-fill" viewBox="0 0 16 16">
                        <path
                            d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

