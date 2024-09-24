import React, {useState} from 'react';
import {
    BoldItalicUnderlineToggles,
    headingsPlugin,
    listsPlugin,
    markdownShortcutPlugin,
    MDXEditor,
    quotePlugin,
    thematicBreakPlugin,
    toolbarPlugin,
    UndoRedo
} from "@mdxeditor/editor";
import {Switch} from "@/shared/ui/switch.tsx";

export const DocViewer = () => {
    const [markdown, setMarkdown] = useState<string>('Hello Worlds')
    const [isMarkdown, setIsMarkdown] = useState<boolean>(true)
    return (
        <div
            className={'w-[45%] z-10 overflow-y-scroll relative bg-customlightgray h-full rounded-xl border-solid border-gray-500 xl:w-full'}>
            <div className={'w-full h-10 flex justify-center items-center gap-x-3 px-2 py-4 bg-customgray'}>
                <p>
                    {`${isMarkdown ? 'Переключить на фотографию' : 'Изменить документ '}`}
                </p>
                <Switch checked={isMarkdown} onCheckedChange={() => {
                    setIsMarkdown(!isMarkdown)
                }}/>
            </div>
            {isMarkdown &&
                <MDXEditor markdown={markdown}
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

