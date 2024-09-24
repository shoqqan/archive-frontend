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
            className={'w-[45%] overflow-y-scroll relative bg-customlightgray h-full flex flex-col gap-y-5 rounded-xl border-solid border-gray-500 px-5 pt-5'}>
            {
                messages.map((message, index) => (
                    <Message content={message.content} isUser={message.isUser} key={index}/>
                ))
            }
            <div className={'sticky flex justify-center items-center bottom-0 bg-white h-[20rem] rounded-lg'}>
                <Input className={'text-black placeholder-black'}
                       placeholder={'Напишите AI помошнику'}/>
            </div>
        </div>
    );
};

