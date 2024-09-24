import React, {useEffect} from 'react';
import {Header} from "@/widgets/header";
import {Assistant} from "@/widgets/assistant/ui/assistant.tsx";
import {DocViewer} from "@/widgets/docViewer/ui/docViewer.tsx";
import {AssistantMob} from "@/widgets/chatMob/ui/assistantMob.tsx";
import {useWebSocket} from "@/shared/hooks/useWs.ts";

export const Chat = () => {
    const [wsStatus, sendMessage] = useWebSocket('ws://localhost:8080', msg =>
        console.log(msg)
    );

    useEffect(() => {
        if (wsStatus === 'open') {
            sendMessage({type: 'ready'});
        }
    }, [wsStatus]);
    return (
        <div className={'w-full h-screen flex flex-col items-center gap-y-[2rem] lg:gap-y-[1rem] text-[#E5E5E2]'}>
            <Header/>
            <div className={'w-full h-[40rem] px-20 py-10 flex justify-between lg:h-full lg:justify-center lg:px-3 lg:pt-2'}>
                <Assistant/>
                <DocViewer/>
            </div>

            <AssistantMob />

        </div>
    );
};

