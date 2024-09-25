import {Message} from "@/shared/ui/message.tsx";
import {Input} from "@/shared/ui/input.tsx";
import React, {useState} from "react";

import { useTranslation } from "react-i18next";


export const AssistantMob = () => {
    const messages = [{
        id: "msg1",
        chatId: "chat123",
        isUser: true,
        content: "Привет! Как дела?"
    },
        {
            id: "msg2",
            chatId: "chat123",
            isUser: false,
            content: "Здравствуйте! У меня всё хорошо, спасибо. Чем могу помочь?"
        },
        {
            id: "msg3",
            chatId: "chat123",
            isUser: true,
            content: "Мне нужна помощь с проектом."
        },
        {
            id: "msg4",
            chatId: "chat123",
            isUser: false,
            content: "Конечно, я буду рад помочь. Расскажите подробнее о вашем проекте."
        },
        {
            id: "msg5",
            chatId: "chat123",
            isUser: true,
            content: "Это веб-приложение для управления задачами."
        },
        {
            id: "msg6",
            chatId: "chat123",
            isUser: false,
            content: "Отлично! С чего бы вы хотели начать?"
        },
        {
            id: "msg7",
            chatId: "chat123",
            isUser: true,
            content: "Давайте начнем с планирования структуры базы данных."
        },
        {
            id: "msg8",
            chatId: "chat123",
            isUser: false,
            content: "Хорошая идея. Какие основные сущности вы планируете хранить?"
        },
        {
            id: "msg9",
            chatId: "chat123",
            isUser: true,
            content: "Пользователи, задачи и проекты."
        },
        {
            id: "msg10",
            chatId: "chat123",
            isUser: false,
            content: "Отлично, давайте рассмотрим каждую сущность по очереди."
        }]

    const [isChatOpened, setIsChatOpened] = useState<boolean>(false)

    const { t, ready } = useTranslation();

    return (
        <div>
            {isChatOpened &&
                <div
                    className={'absolute top-4 w-[95%] h-[95%] py-5 bg-customlightgray gap-y-3 left-1/2 transform -translate-x-1/2 rounded-xl border-solid border-gray-500 z-30'}>
                    <div className={"relative"}>
                        <h3 className='text-center text-xl pb-4 border-b-black border-b-2'>Tokayev Online</h3>
                        <div onClick={() => setIsChatOpened(false)} className={"absolute right-7 top-1 z-40"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="size-6" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                            </svg>
                        </div>
                    </div>
                    <div
                        className={'w-full overflow-y-scroll relative bg-customlightgray h-[95%] flex flex-col gap-y-5 rounded-xl px-6 py-5'}>
                        {
                            messages.map((message, index) => (
                                <Message content={message.content} isUser={message.isUser} key={index}/>
                            ))
                        }
                        <div className={"relative flex justify-center items-center bg-white rounded-xl"}>
                            <Input className={'text-black placeholder-black pr-14'}
                                   placeholder={t("Input_chat_placeholder")}/>
                            <div className={"realtive right-5 cursor-pointer"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="absolute text-customblue size-5 top-2 right-5" viewBox="0 0 16 16">
                                    <path
                                        d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div
                className={"fixed bottom-5 right-5 bg-customlightgray border-solid border-customgray p-5 rounded-full z-20 hidden xl:block transform scale-x-[-1]"}
                onClick={() => setIsChatOpened(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="size-6" viewBox="0 0 16 16">
                    <path
                        d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                </svg>
            </div>
        </div>
    );
}