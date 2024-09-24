import React from 'react';
import {Header} from "@/widgets/header";
import {FileUploader} from "@/shared/ui/fileUploader.tsx";
import {Docs} from "@/widgets/docs";

export const Home = () => {
    return (
        <div className={'w-full h-full flex flex-col items-center gap-y-[4rem] text-[#E5E5E2]'}>
            <Header/>
            <div className={'w-[50%] flex gap-y-10 py-10 flex-col items-center'}>
                <h1 className={'font-bold w-fit text-center text-3xl'}>Добрый день! Загрузите ваш документ.</h1>
                <FileUploader/>
                <div
                    className={'w-[80%] border border-solid rounded-xl border-customblue p-5 shadow-2xl flex flex-col'}>
                    Восстанавливайте документы по одному клику
                </div>
                <Docs/>
            </div>

        </div>
    );
};
