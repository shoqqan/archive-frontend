import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useUnit} from "effector-react";
import {$home, getUserChatsFx} from "@/pages/home/model.ts";
import {Skeleton} from "@/widgets/docs/ui/skeleton.tsx";

import {useTranslation} from "react-i18next";
import {timeAgo} from "@/shared/lib/utils.ts";

export const Docs = () => {
    const {isLoading, userChats} = useUnit($home)
    const navigate = useNavigate()
    const skeletons = [
        {},
        {},
        {},
        {},
        {},
        {}
    ];
    useEffect(() => {
        getUserChatsFx().then((res) => {
            console.log(res)
        })
    }, []);

    const {t, ready} = useTranslation();

    return (
        <div className={'w-full px-[5rem] gap-y-3 flex flex-col justify-center xl:px-[1rem] mx-auto items-center'}>
            <div className={'flex items-center gap-x-3'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     viewBox="0 0 256 256" className="text-accent-secondary-100">
                    <path
                        d="M232.07,186.76a80,80,0,0,0-62.5-114.17A80,80,0,1,0,23.93,138.76l-7.27,24.71a16,16,0,0,0,19.87,19.87l24.71-7.27a80.39,80.39,0,0,0,25.18,7.35,80,80,0,0,0,108.34,40.65l24.71,7.27a16,16,0,0,0,19.87-19.86ZM62,159.5a8.28,8.28,0,0,0-2.26.32L32,168l8.17-27.76a8,8,0,0,0-.63-6,64,64,0,1,1,26.26,26.26A8,8,0,0,0,62,159.5Zm153.79,28.73L224,216l-27.76-8.17a8,8,0,0,0-6,.63,64.05,64.05,0,0,1-85.87-24.88A79.93,79.93,0,0,0,174.7,89.71a64,64,0,0,1,41.75,92.48A8,8,0,0,0,215.82,188.23Z"></path>
                </svg>
                <h3>{t("Your_documents")}</h3>
            </div>
            <div className={'grid grid-cols-3 xl:grid-cols-1'}>
                {
                    isLoading || userChats.length === 0 &&

                    skeletons.map((_, index) => (
                        <Skeleton key={index}/>
                    ))
                }
                {
                    !isLoading &&
                    userChats.map((item, index) => (
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
                            <div>{item.title}</div>
                            <div>{timeAgo(item.time)}</div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

