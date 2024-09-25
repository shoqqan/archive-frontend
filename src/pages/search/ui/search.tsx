import React from 'react';
import {Header} from "@/widgets/header";


export const Search = () => {
    const res = [
        {
            docId: "12314",
            content: "Lorem Ipsum dolor",
            createdAt: "2024-09-24T12:34:56.000Z",
            updatedAt: "2024-09-25T08:45:10.000Z",
        },
        {
            docId: "56789",
            content: "Sed ut perspiciatis unde omnis",
            createdAt: "2024-09-23T10:20:30.000Z",
            updatedAt: "2024-09-24T14:15:20.000Z",
        },
        {
            docId: "98765",
            content: "But I must explain to you",
            createdAt: "2024-09-21T09:12:45.000Z",
            updatedAt: "2024-09-22T11:25:35.000Z",
        },
        {
            docId: "24680",
            content: "At vero eos et accusamus",
            createdAt: "2024-09-20T13:45:10.000Z",
            updatedAt: "2024-09-21T15:50:25.000Z",
        },
        {
            docId: "13579",
            content: "On the other hand, we denounce",
            createdAt: "2024-09-19T07:25:30.000Z",
            updatedAt: "2024-09-20T09:30:45.000Z",
        },
        {
            docId: "13579",
            content: "On the other hand, we denounce",
            createdAt: "2024-09-19T07:25:30.000Z",
            updatedAt: "2024-09-20T09:30:45.000Z",
        },
        {
            docId: "13579",
            content: "On the other hand, we denounce",
            createdAt: "2024-09-19T07:25:30.000Z",
            updatedAt: "2024-09-20T09:30:45.000Z",
        },
        {
            docId: "13579",
            content: "On the other hand, we denounce",
            createdAt: "2024-09-19T07:25:30.000Z",
            updatedAt: "2024-09-20T09:30:45.000Z",
        },
        {
            docId: "13579",
            content: "On the otherdenounce",
            createdAt: "2024-09-19T07:25:30.000Z",
            updatedAt: "2024-09-20T09:30:45.000Z",
        },
    ];

    // return <Loader />
    return (
        <div className={'w-full min-h-screen flex flex-col bg-[#2B2B28] items-center gap-y-[3rem] lg:gap-y-3 px-4 text-[#E5E5E2]'}>
            <Header/>

            <div className="flex-wrap flex gap-4 w-[70%]">
                {res.map((doc) => (
                        <a href={`/chat/${doc.docId}`} className={"border-solid border-2 rounded-xl px-4 py-3 hover:scale-105 cursor-pointer w-56 transition duration-300 ease-in-out"}>
                            <h3>{doc.docId}</h3>
                            <p className={"truncate"}>{doc.content}</p>
                        </a>
                    ))
                }
            </div>

        </div>
    );
};

