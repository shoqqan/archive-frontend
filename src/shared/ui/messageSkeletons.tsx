import React from 'react';
import {twMerge} from "tailwind-merge";

export const MessageSkeletons = () => {
    const messages = [
        {
            isUser: true,
        },
        {
            isUser: false,
        },
        {
            isUser: true,
        },
        {
            isUser: true,
        },
        {
            isUser: false,
        },
        {
            isUser: false,
        },
        {
            isUser: true,
        },
        {
            isUser: false,
        },
        {
            isUser: true,
        },
        {
            isUser: false,
        }]
    return (
        <>
            {messages.map((message, index) => (
                <div key={index}
                     className={twMerge('animate-pulse w-full flex justify-start', !message.isUser && 'justify-end')}>
                    <div
                        className={twMerge('animate-pulse w-72 h-24 bg-customgray p-3 rounded-2xl', !message.isUser && 'border border-solid border-customgray bg-customgray')}>
                    </div>
                </div>
            ))}
        </>
    )

};

