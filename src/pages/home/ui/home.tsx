import React from 'react';
import {Header} from "@/widgets/header";
import {FileUploader} from "@/shared/ui/fileUploader.tsx";
import {Docs} from "@/widgets/docs";

export const Home = () => {

    return (
        <div className={'w-full h-full flex flex-col items-center gap-y-[3rem] lg:gap-y-3 gap-x-1 text-[#E5E5E2]'}>
            <Header/>
            <div className={'w-[70%] flex gap-y-10 py-10 flex-col items-center lg:py-5 lg:w-[95%]'}>
                <h1 className={'font-bold w-fit text-center text-3xl lg:text-2xl'}>Добрый день! Загрузите ваш
                    документ.</h1>
                <FileUploader/>
                <div
                    className={'lg:w-[90%] w-[80%] text-center border border-solid rounded-xl border-customblue p-5 shadow-2xl flex flex-col'}>
                    Восстанавливайте документы по одному клику
                </div>
                <Docs/>
            </div>

        </div>
    );
};
