import React from 'react';
import {InputWithButton} from "@/shared/ui/inputWithButton.tsx";
import {useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <div className={'w-full h-24 flex items-center justify-between px-10 py-2 lg:px-4 lg:space-x-2'}>
            <div className={'flex items-center gap-x-5 cursor-pointer'} onClick={() => navigate('/home')}>
                <img className={'w-20 lg:w-14'} src="images/header-logo.png" alt="logo"/>
                <span className={'font-bold text-2xl xl:hidden xl:text-xl'}>
                Архив Президента Республики Казахстан
            </span>
            </div>
            <InputWithButton/>
            <div className={'hidden items-center gap-x-5'}>
                RU
            </div>
        </div>
    );
};

