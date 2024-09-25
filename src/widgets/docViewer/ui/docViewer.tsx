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
    const downloadPDF = () => {
        console.log("Download PDF ", JSON.stringify(markdown));
        fetch('https://archive.wb.money/doc/markdown-to-pdf', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: markdown
            })
        })
            .then((response) => response.blob())
            .then((blob) => {
                // Create blob link to download
                const url = window.URL.createObjectURL(
                    new Blob([blob]),
                );
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                    'download',
                    `Document.pdf`,
                );

                document.body.appendChild(link);

                link.click();

                if (link.parentNode) {
                    link.parentNode.removeChild(link);
                }
            });
    }
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
            <div className={'flex justify-between w-full bg-customgray px-5 py-4 items-center'}>
                <div className={'h-10 flex items-center gap-x-3'}>
                    <p>
                        {`${isMarkdown ? t("Switch_to_photo") : t("Switch_to_edit")}`}
                    </p>
                    <Switch checked={isMarkdown} onCheckedChange={() => {
                        setIsMarkdown(!isMarkdown)
                    }}/>
                </div>
                <div className={'cursor-pointer'} onClick={downloadPDF}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="size-5" viewBox="0 0 16 16">
                        <path
                            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                        <path
                            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                    </svg>
                </div>
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
