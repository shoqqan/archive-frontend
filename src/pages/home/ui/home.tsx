import React from 'react';
import {Header} from "@/widgets/header";

export const Home = () => {
    return (
        <div className={'w-full h-full bg-[#EDEDED]'}>
            <Header/>
            <div>
                <h1>Добрый день! Загрузите документ</h1>
            </div>
        </div>
    );
};
