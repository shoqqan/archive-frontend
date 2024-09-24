import React from 'react';
import {Header} from "@/widgets/header";
import {Assistant} from "@/widgets/assistant/ui/assistant.tsx";
import {DocViewer} from "@/widgets/docViewer/ui/docViewer.tsx";

export const Chat = () => {

    return (
        <div className={'w-full h-screen flex flex-col items-center gap-y-[2rem] text-[#E5E5E2]'}>
            <Header/>
            <div className={'w-full h-[40rem] px-20 py-10 flex justify-between'}>
                <Assistant/>
                <DocViewer/>
            </div>

        </div>
    );
};

