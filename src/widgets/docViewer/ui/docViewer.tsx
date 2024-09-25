import React, {useEffect, useState} from 'react';
import {Switch} from "@/shared/ui/switch.tsx";

import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import {useUnit} from "effector-react";
import {$chat, getChatFx} from "@/pages/chat/model.ts";
import {
    BoldItalicUnderlineToggles,
    headingsPlugin,
    listsPlugin,
    markdownShortcutPlugin,
    MDXEditor,
    MDXEditorMethods,
    quotePlugin,
    thematicBreakPlugin,
    toolbarPlugin,
    UndoRedo
} from "@mdxeditor/editor";
import {WSURL} from "@/shared/lib/environments.ts";


export const DocViewer = () => {
    const [markdown, setMarkdown] = useState<string>('')
    const [isMarkdown, setIsMarkdown] = useState<boolean>(true)
    const {id} = useParams()
    const {docId} = useUnit($chat)
    const {t, ready} = useTranslation();
    const ref = React.useRef<MDXEditorMethods>(null)
    useEffect(() => {
        ref.current?.setMarkdown('')
        const ws = new WebSocket(`${WSURL}/${docId}`);

        ws.onopen = () => {
            console.log('WebSocket connection established');
        };

        ws.onmessage = (event) => {
            const data = event.data;
            const currentMarkdown = ref.current?.getMarkdown() + data
            setMarkdown(currentMarkdown)
            ref.current?.setMarkdown(currentMarkdown)
            if (data.includes('[close]')) {
                ws.close()
            }
        };

        ws.onclose = async () => {
            console.log('WebSocket connection closed');
            await getChatFx(id)
        };

        return () => {
            ws.close();
        };
    }, [docId]);
    return (
        <div
            className={'w-[45%] z-10 overflow-y-scroll relative bg-customlightgray h-full rounded-xl border-solid border-gray-500 xl:w-full'}>
            <div className={'w-full h-10 flex justify-center items-center gap-x-3 px-2 py-4 bg-customgray'}>
                <p>
                    {`${isMarkdown ? t("Switch_to_photo") : t("Switch_to_edit")}`}
                </p>
                <Switch checked={isMarkdown} onCheckedChange={() => {
                    setIsMarkdown(!isMarkdown)
                }}/>
            </div>
            {isMarkdown &&
                <MDXEditor
                    ref={ref}
                    markdown={markdown}
                    className={'flex h-full'}
                    onChange={(editedText) => {
                        setMarkdown(editedText)
                    }}
                    plugins={[headingsPlugin(),
                        listsPlugin(),
                        quotePlugin(),
                        thematicBreakPlugin(),
                        markdownShortcutPlugin(),
                        toolbarPlugin({
                            toolbarContents: () => (
                                <div
                                    className={'w-10 mr-6 h-full bg-customgray flex flex-col items-center text-white'}>
                                    {' '}
                                    <UndoRedo/>
                                    <BoldItalicUnderlineToggles/>
                                </div>
                            )
                        })]}/>
            }
            {!isMarkdown &&
                <div className={'w-full h-full flex justify-center items-center'}>
                    <img src={'images/header-logo.png'}/>
                </div>
            }

        </div>
    );
};

