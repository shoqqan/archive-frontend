import React, {useEffect, useRef} from 'react';
import {twMerge} from "tailwind-merge";

export const Message = ({isUser, content}) => {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        ref.current?.scrollIntoView({behavior: "smooth"})
    }, [content])
    return (
        <div ref={ref} className={twMerge('w-full flex justify-start', !isUser && 'justify-end')}>
            <div
                className={twMerge('bg-customblue p-3 rounded-2xl', !isUser && 'border border-solid border-customgray bg-customgray')}>
                {content}
            </div>
        </div>
    );
};

