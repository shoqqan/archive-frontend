import React from 'react';
import {InputWithButton} from "@/shared/ui/inputWithButton.tsx";

export const Header = () => {
    return (
        <div className={'w-full h-24 flex items-center justify-between px-10 py-2'}>
            <div className={'flex items-center gap-x-5'}>
                <img className={'w-20'} src="images/header-logo.png" alt="logo"/>
                <span className={'font-bold text-2xl '}>
                Архив Президента Республики Казахстан
            </span>
            </div>
            <InputWithButton/>
            <div>
                RU
            </div>
        </div>
    );
};

