import React from 'react';
import {InputWithButton} from "@/shared/ui/inputWithButton.tsx";
import {useNavigate} from "react-router-dom";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/shared/ui/select"

import { useTranslation } from "react-i18next";

export const Header = () => {
    const navigate = useNavigate();
    const { t, i18n, ready } = useTranslation();

    const changeLanguage = (lng: string) => {
        console.log(lng);
        localStorage.setItem("lang", lng);
        i18n.changeLanguage(lng);
    };

    if(ready) {
        return (
            <div className={'w-full h-24 flex items-center justify-between px-10 py-2 lg:px-4 lg:space-x-2'}>
                <div className={'flex items-center gap-x-5 cursor-pointer'} onClick={() => navigate('/home')}>
                    <img className={'w-20 lg:w-14'} src="images/header-logo.png" alt="logo"/>
                    <span className={'font-bold text-2xl xl:hidden xl:text-xl'}>
                        {t("Name_of_the_project")}
                    </span>
                </div>
                <InputWithButton/>
                <div className={'items-center gap-x-5'}>
                    <Select onValueChange={changeLanguage}>
                        <SelectTrigger className="w-[100px]">
                            <SelectValue placeholder={localStorage.getItem("lang") == null || localStorage.getItem("lang") == "ru" ? "Русский" : "Қазақша"} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="ru">Русский</SelectItem>
                            <SelectItem value="kz">Қазақша</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        );
    }
    return "Loading...";
};

