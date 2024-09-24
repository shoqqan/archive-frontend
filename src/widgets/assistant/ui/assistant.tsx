import React from 'react';
import {Input} from "@/shared/ui/input.tsx";
import {Message} from "@/shared/ui/message.tsx";

export const Assistant = () => {
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


    return (
        <div
            className={'w-[45%] overflow-y-scroll relative bg-customlightgray h-full flex flex-col gap-y-5 rounded-xl border-solid border-gray-500 px-5 pt-5 xl:hidden'}>
            {
                messages.map((message, index) => (
                    <Message content={message.content} isUser={message.isUser} key={index}/>
                ))
            }
            <div className={'sticky flex justify-center items-center bottom-0 bg-white h-[20rem] rounded-lg'}>
                <Input className={'text-black placeholder-black'}
                       placeholder={'Напишите AI помошнику'}/>
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

