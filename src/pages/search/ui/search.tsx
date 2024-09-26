import React from 'react';
import {Header} from "@/widgets/header";
import {useUnit} from "effector-react";
import {$search} from "@/pages/search/model.ts";
import {Skeleton} from "@/widgets/docs/ui/skeleton.tsx";
import {timeAgo} from "@/shared/lib/utils.ts";
import {useNavigate} from "react-router-dom";


export const Search = () => {
    const {docs, isLoading} = useUnit($search)
    const navigate = useNavigate()
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
        <div
            className={'w-full min-h-screen flex flex-col bg-[#2B2B28] items-center gap-y-[3rem] lg:gap-y-3 px-4 text-[#E5E5E2]'}>
            <Header/>

            <div className="flex-wrap flex gap-4 w-[70%]">
                {(docs?.length == 0 || isLoading) &&
                    res.map(() => (
                        <Skeleton/>
                    ))
                }
                {!isLoading && docs.map((item) => (
                    <div key={index}
                         className={'p-5 flex flex-col gap-y-5 xl:w-full md:w-full mx-[1rem] my-[1rem] border-solid rounded-2xl border-gray-500 bg-[#2B2B28]'}
                         onClick={() => {
                             navigate(`/chat/${item.id}`)
                         }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                             viewBox="0 0 256 256">
                            <path
                                d="M232.07,186.76a80,80,0,0,0-62.5-114.17A80,80,0,1,0,23.93,138.76l-7.27,24.71a16,16,0,0,0,19.87,19.87l24.71-7.27a80.39,80.39,0,0,0,25.18,7.35,80,80,0,0,0,108.34,40.65l24.71,7.27a16,16,0,0,0,19.87-19.86ZM62,159.5a8.28,8.28,0,0,0-2.26.32L32,168l8.17-27.76a8,8,0,0,0-.63-6,64,64,0,1,1,26.26,26.26A8,8,0,0,0,62,159.5Zm153.79,28.73L224,216l-27.76-8.17a8,8,0,0,0-6,.63,64.05,64.05,0,0,1-85.87-24.88A79.93,79.93,0,0,0,174.7,89.71a64,64,0,0,1,41.75,92.48A8,8,0,0,0,215.82,188.23Z"></path>
                        </svg>
                        <div>{item.content}</div>
                        <div>{timeAgo(item.created_at)}</div>
                    </div>
                ))}
            </div>

        </div>
    );
};

